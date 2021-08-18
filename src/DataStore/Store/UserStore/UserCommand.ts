import { IUserCommand } from "../../../Processor/User/Interface/IUserCommand";
import { Authtoken } from "../../../Processor/User/Model/Authtoken";
import { ZKUser } from "../../../Processor/User/Model/User";
import { commonClientPersistence } from "../../Configuration/CommonClientPerisistence";
import { BaseStore } from "../BaseStore";

export class UserCommand extends BaseStore<ZKUser> implements IUserCommand {
    async createUser(zkuser: ZKUser): Promise<ZKUser> {
        let rawJson = null;
        const persistence = new commonClientPersistence();
        try {
            const newZkuser = await persistence.db.zarkUser.create({
                data: JSON.parse(JSON.stringify(zkuser))
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = super.plainToEntityType(newZkuser);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    updateUser(zkuser: ZKUser): Promise<ZKUser> {
        throw new Error("Method not implemented.");
    }
    deleteUser(zkuser: ZKUser): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async addAuthToken(zkuser: ZKUser): Promise<ZKUser> {
        const persistence = new commonClientPersistence();

        try {
            const authtoken = zkuser.authToken;
            let newToken = await persistence.db.authtoken.create({
                data: JSON.parse(JSON.stringify(authtoken))
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            zkuser.authToken = JSON.parse(JSON.stringify(newToken));
        }
        catch (error) {
            console.log(error);
        }
        finally {
            persistence.db.$disconnect();
        }
        return zkuser;
    }
    async getUserAuthToken(zkuid: number): Promise<any> {
        let refreshTokenArr: Authtoken = null;
        const persistence = new commonClientPersistence();

        try {
            let authToken = await persistence.db.authtoken.findMany({
                where: {
                    authUserId: {
                        equals: zkuid
                    }
                }
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            }); refreshTokenArr = JSON.parse(JSON.stringify(authToken));
        }
        catch (erro) {
            console.log(erro);
        } finally {
            persistence.db.$disconnect();
        }

        return refreshTokenArr;
    }

}