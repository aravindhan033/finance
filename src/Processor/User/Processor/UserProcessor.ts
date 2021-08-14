import { UserCommand } from "../../../DataStore/Store/UserStore/UserCommand";
import { IUserProcessor } from "../Interface/IUserProcessor";
import { ZKUser } from "../Model/User";

export class UserProcessor implements IUserProcessor {
    async createUser(zkuser: ZKUser): Promise<ZKUser> {
        const cmd = new UserCommand();

        return await cmd.createUser(zkuser);
    }
    userLogin(zkuser: ZKUser): Promise<ZKUser> {
        throw new Error("Method not implemented.");
    }


}