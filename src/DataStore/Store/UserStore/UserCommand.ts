import { IUserCommand } from "../../../Processor/User/Interface/IUserCommand";
import { ZKUser } from "../../../Processor/User/Model/User";
import { commonClientPersistence } from "../../Configuration/CommonClientPerisistence";
import { BaseStore } from "../BaseStore";

export class UserCommand extends BaseStore<ZKUser> implements IUserCommand {
    async createUser(zkuser: ZKUser): Promise<ZKUser> {
       
        console.log("in store");

        const persistence = new commonClientPersistence();
        const newZkuser = await persistence.db.zarkUser.create({
            data: JSON.parse(JSON.stringify(zkuser))
        });
        console.log("in store over");

        const rawJson = super.plainToEntityType(newZkuser);
        return rawJson;

    }
    updateUser(zkuser: ZKUser): Promise<ZKUser> {
        throw new Error("Method not implemented.");
    }
    deleteUser(zkuser: ZKUser): Promise<void> {
        throw new Error("Method not implemented.");
    }

}