import { ZKUser } from '../Model/User'
export interface IUserProcessor {
    createUser(zkuser: ZKUser): Promise<ZKUser>;
    userLogin(zkuser: ZKUser): Promise<ZKUser>;

}