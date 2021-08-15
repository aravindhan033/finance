import { asClass } from "awilix";
import { diContainer } from "fastify-awilix";
import { IUserCommand } from "../../../Processor/User/Interface/IUserCommand";
import { ZKUser } from "../../../Processor/User/Model/User";
import { commonClientPersistence } from "../../Configuration/CommonClientPerisistence";
import { BaseStore } from "../BaseStore";

export class UserCommand extends BaseStore<ZKUser> implements IUserCommand {
    constructor({ userCommand }) {
        this.userCommand = userCommand;
    }
    async createUser(zkuser: ZKUser): Promise<ZKUser> {
        const persistence = new commonClientPersistence();
        persistence.db.$transaction;
        const newZkuser = await persistence.db.zarkUser.create({
            data: JSON.parse(JSON.stringify(zkuser))
        });
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
diContainer.register({
    UserCommand: asClass(UserCommand, {
    }),
})