import { Authtoken } from '../../Model/Authtoken';
import { ZKUser } from '../../Model/User'
export interface IUserProcessor {
    createUser(zkuser: ZKUser): Promise<ZKUser>;
    userLogin(zkuser: ZKUser,loginInfo:JSON): Promise<JSON>;    
    getAccessToken(authId: number, expiredAccessToken:String,zkuid: number): Promise<Authtoken>;
    checkIsExistingUser(zkuser: ZKUser):Promise<Boolean>;
    
}