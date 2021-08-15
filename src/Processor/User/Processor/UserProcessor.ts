import { diContainer } from "fastify-awilix";
import { IUserProcessor } from "../Interface/IUserProcessor";
import { ZKUser } from "../Model/User";

export class UserProcessor implements IUserProcessor {
    async createUser(zkuser: ZKUser): Promise<ZKUser> {
        const cmd = (IUserCommand) diContainer.resolve("userCommand");

        return await cmd.createUser(zkuser);


    }
    userLogin(zkuser: ZKUser): Promise<ZKUser> {
        throw new Error("Method not implemented.");
    }


}