import { Authtoken } from "../Model/Authtoken";
import { ZKUser } from "../Model/User";

export interface IUserCommand {
    createUser(zkuser: ZKUser): Promise<ZKUser>;
    updateUser(zkuser: ZKUser): Promise<ZKUser>;
    deleteUser(zkuser: ZKUser): Promise<void>;
    addAuthToken(authToken: Authtoken): Promise<Authtoken> ;  
    updateUserAccessToken(authToken:Authtoken):Promise<any>;
    deleteAuthToken(authToken:Authtoken):Promise<any>;
}