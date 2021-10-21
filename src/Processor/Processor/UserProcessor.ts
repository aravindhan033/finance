import { UserCommand } from "../../DataStore/Store/UserStore/UserCommand";
import { IUserProcessor } from "../Interface/User/IUserProcessor";
import { ZKUser } from "../Model/User";
import { UserQuery } from "../../DataStore/Store/UserStore/UserQuery";
import config from "../../config";
import { Authtoken } from "../Model/Authtoken";
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

export class UserProcessor implements IUserProcessor {
    public async createUser(zkuser: ZKUser): Promise<ZKUser> {
        let isExistingUser=await this.checkIsExistingUser(zkuser);
        if (!isExistingUser) {
            const userCommand = new UserCommand();
            zkuser = await this.convertPasswordToHash(zkuser);
            return await userCommand.createUser(zkuser);
        }
        else {
            return null;
        }

    }
    async convertPasswordToHash(zkuser: ZKUser): Promise<ZKUser> {
        let plainPassword = zkuser.password;
        let hashedPassword = await bcrypt.hash(plainPassword, 10);
        zkuser.password = hashedPassword;
        return zkuser;
    }

    async userLogin(zkuser: ZKUser, loginInfo: JSON): Promise<JSON> {
        const userCommand = new UserQuery();
        const dbUser: ZKUser = await userCommand.getUser(zkuser) as ZKUser;
        let resultObject = {} as JSON;
        if (dbUser != null && dbUser.password != null && await bcrypt.compare(zkuser.password, dbUser.password)) {
            zkuser.authToken = {} as Authtoken;
            zkuser.authToken.loginInfo = loginInfo;
            zkuser.zkuid = dbUser.zkuid;
            zkuser = await this.createAndSaveRefreshToken(zkuser);
            let accessToken: Authtoken = await this.getAccessToken(zkuser.authToken.authId, zkuser.authToken.authToken, zkuser.zkuid);
            resultObject["accessToken"] = accessToken.accessToken;
            resultObject["zkuid"] = zkuser.zkuid;
        }
        else {

        }
        return resultObject;
    }

    async createAndSaveRefreshToken(zkuser: ZKUser): Promise<ZKUser> {
        let refreshToken = zkuser.authToken as Authtoken;
        refreshToken.expiration = Math.floor(Date.now() / 1000) + (config.refreshTokenExpire);
        refreshToken.authToken = await jwt.sign({
            exp: refreshToken.expiration,
            data: { zkuid: zkuser.zkuid }
        }, config.refreshTokenSecret);
        refreshToken.authUserId = zkuser.zkuid;
        const userCommand = new UserCommand();
        zkuser.authToken = await userCommand.addAuthToken(zkuser.authToken);
        return zkuser;
    }
    async getAccessToken(authId: number, expiredAccessToken: string, zkuid: number): Promise<Authtoken> {
        let accessToken = {} as Authtoken;
        try {
            const userQuery = new UserQuery();
            let isRefreshTokenValid = false;

            if (authId == null) {
                let authTokenObj=await this.getAuthId(zkuid,expiredAccessToken);
                if(authTokenObj!=null && authTokenObj.authId!=null ){
                    accessToken.authId = authTokenObj.authId
                    accessToken.authToken = authTokenObj.authToken;
                }
            }
            else {
                let refreshTokenObj = await userQuery.getUserAuthTokenByAuthId(authId);
                accessToken.authId = refreshTokenObj["authId"];
                accessToken.authToken = refreshTokenObj["authToken"];
            }
            if (accessToken.authToken != null) {
                await jwt.verify(accessToken.authToken, config.refreshTokenSecret, async (err, res) => {
                    if (err == null) {
                        isRefreshTokenValid = true;
                    }
                });
            }


            if (isRefreshTokenValid) {
                const userCommand = new UserCommand();
                accessToken.expiration = Math.floor(Date.now() / 1000) + (config.accessTokenExpire);
                accessToken.accessToken = await jwt.sign({
                    exp: accessToken.expiration,
                    data: { "zkuid": zkuid }
                }, config.accessTokenSecret);
                accessToken = await userCommand.updateUserAccessToken(accessToken);
            }
        }
        catch (err) {
            console.log(err);
        }
        return accessToken;

    }
    async checkIsExistingUser(zkuser: ZKUser): Promise<Boolean> {
        const userQuery = new UserQuery();
        const dbUser: ZKUser = await userQuery.getUser(zkuser) as ZKUser;
        return dbUser != null;
    }

    async updateUser(zkuser: ZKUser): Promise<ZKUser> {
        if(zkuser.zkuid!=null){
            const userCommand = new UserCommand();
            let updateZkuser = await userCommand.updateUser(zkuser);
            return updateZkuser
        }
        else{
            return null;
        }

    }

    async getAuthId(zkuid: number, accessToken: string): Promise<Authtoken> {
        const userQuery = new UserQuery();
        let authToken: Authtoken = {} as Authtoken;
        let refreshTokenArr = await userQuery.getUserAuthToken(zkuid);
        if (refreshTokenArr != null && refreshTokenArr.length > 0) {
            for (let i = 0; i < refreshTokenArr.length; i++) {
                if (accessToken == refreshTokenArr[i]["accessToken"]) {
                    authToken = refreshTokenArr[i];
                    break;
                }
            }
        }
        return authToken;
    }
    async terminateSession(zkuser: ZKUser,allSession:Boolean): Promise<Boolean> {        
        if(zkuser.zkuid==null){
            return false;
        }
        const userCommand = new UserCommand();
        if(allSession){
            let sessionToken={} as Authtoken;
            sessionToken.authUserId=zkuser.zkuid;
            
            if( sessionToken!=null && sessionToken.authUserId!=null){
                await userCommand.deleteUserAllAuthToken(sessionToken);        
                return true;
            }            
        }
        else{
            let authTokenObj=await this.getAuthId(zkuser.zkuid,zkuser.authToken.accessToken);
            if( authTokenObj!=null && authTokenObj.authId!=null){
                await userCommand.deleteAuthToken(authTokenObj);        
                return true;
            }            
        }
        return false;
    }    
}
