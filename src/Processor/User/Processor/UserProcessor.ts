import { UserCommand } from "../../../DataStore/Store/UserStore/UserCommand";
import { IUserProcessor } from "../Interface/IUserProcessor";
import { ZKUser } from "../Model/User";
import { bcrypt } from 'bcrypt';
import { UserQuery } from "../../../DataStore/Store/UserStore/UserQuery";
import { jwt } from 'jsonwebtoken';
import config from "../../../config";
import { Authtoken } from "../Model/Authtoken";
export class UserProcessor implements IUserProcessor {
    public async createUser(zkuser: ZKUser): Promise<ZKUser> {
        const cmd = new UserCommand();
        zkuser = await this.convertPasswordToHash(zkuser);
        let createdUser = await cmd.createUser(zkuser);
        return await cmd.createUser(zkuser);
    }
    async convertPasswordToHash(zkuser: ZKUser): Promise<ZKUser> {
        let plainPassword = zkuser.password;
        let hashedPassword = await bcrypt.hash(plainPassword, 10);
        zkuser.password = hashedPassword;
        return zkuser;
    }

    async userLogin(zkuser: ZKUser,loginInfo:JSON): Promise<JSON> {
        const cmd = new UserQuery();
        const dbUser: ZKUser = await cmd.getUser(zkuser) as ZKUser;
        let resultObject=null;
        if ( dbUser!=null && dbUser.password!=null && await bcrypt.compare(zkuser.password, dbUser.password)) {
            zkuser.authToken.loginInfo=loginInfo;
            zkuser = await this.createAndSaveRefreshToken(zkuser);
            let accessToken:Authtoken =await this.getAccessToken(zkuser.authToken.authToken);
            resultObject.accessToken=accessToken.authToken;
            resultObject.zkuid=zkuser.zkuid;
        }
        else{
            
        }
        return resultObject;
    }

    async createAndSaveRefreshToken(zkuser: ZKUser): Promise<ZKUser> {
        let refreshToken = zkuser.authToken as Authtoken;
        refreshToken.expiration = Math.floor(Date.now() / 1000) + (config.refreshTokenExpire);
        refreshToken.authToken = await jwt.sign({
            exp:refreshToken.expiration,
            data: { zkuid: zkuser.zkuid }
        }, config.refreshTokenSecret);

        const cmd = new UserCommand();

        zkuser = await cmd.addAuthToken(zkuser);

        return zkuser;
    }
    async getAccessToken(refreshToken:String): Promise<Authtoken>{
        let accessToken={} as Authtoken;
                
        await jwt.verify(refreshToken,config.refreshTokenSecret,async (err,res)=>{
            if(err){
                return null;
            }
            else{
                let zkuid=1;
                const cmd = new UserCommand();
                let refreshTokenArr=await cmd.getUserAuthToken(zkuid);
                let isRefreshTokenValid=false;
                if(refreshTokenArr!=null && refreshTokenArr.length>0){
                    for(let i=0;i<refreshTokenArr.length;i++){
                        if(refreshToken==refreshTokenArr[i]["authToken"]){
                            isRefreshTokenValid=true;
                            break;
                        }                        
                    }
                }
                if(!isRefreshTokenValid){
                    return null;
                }
                accessToken.authToken = await jwt.sign({
                    exp: accessToken.expiration,
                    data: {"refreshToken":refreshToken,"zkuid": zkuid }
                }, config.accessTokenSecret);
                
            }
        });
        return accessToken;
        
    }

}
