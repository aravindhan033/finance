import { UserCommand } from "../../../DataStore/Store/UserStore/UserCommand";
import { IUserProcessor } from "../Interface/IUserProcessor";
import { ZKUser } from "../Model/User";
import { bcrypt } from 'bcrypt';
import { UserQuery } from "../../../DataStore/Store/UserStore/UserQuery";
=import { jwt } from 'jsonwebtoken';
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

    async userLogin(zkuser: ZKUser): Promise<ZKUser> {
        const cmd = new UserQuery();
        const dbUser: ZKUser = await cmd.getUser(zkuser) as ZKUser;
        if (await bcrypt.compare(zkuser.password, dbUser.password)) {
            zkuser = await this.createAndSaveRefreshToken(zkuser);
            return dbUser;
        }
        else {
            return null;
        }
    }

    async createAndSaveRefreshToken(zkuser: ZKUser): Promise<ZKUser> {
        let refreshToken = zkuser.authToken as Authtoken;
        refreshToken.expiration = Math.floor(Date.now() / 1000) + (config.refreshTokenExpire);
        refreshToken.authToken = await jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (config.refreshTokenExpire),
            data: { zkuid: zkuser.zkuid }
        }, config.refreshTokenSecret);

        const cmd = new UserCommand();

        zkuser = await cmd.addAuthToken(zkuser);

        return zkuser;
    }


}