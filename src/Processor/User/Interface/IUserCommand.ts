import { ZKUser } from "../Model/User";

export interface IUserCommand {
    createUser(zkuser: ZKUser): Promise<ZKUser>;
    updateUser(zkuser: ZKUser): Promise<ZKUser>;
    deleteUser(zkuser: ZKUser): Promise<void>;
    addAuthToken(zkuser: ZKUser): Promise<ZKUser>;
    getUserAuthToken(zkuid:number): Promise<any>;
}