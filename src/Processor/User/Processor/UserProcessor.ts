import { UserCommand } from "../../../DataStore/Store/UserStore/UserCommand";
import { IUserProcessor } from "../Interface/IUserProcessor";
import { ZKUser } from "../Model/User";

export class UserProcessor implements IUserProcessor {
    public async createUser(zkuser: ZKUser): Promise<ZKUser> {
        const cmd = new UserCommand();
        console.log("in processor");
        return await cmd.createUser(zkuser);
    }
    userLogin(zkuser: ZKUser): Promise<ZKUser> {
        throw new Error("Method not implemented.");
    }


}