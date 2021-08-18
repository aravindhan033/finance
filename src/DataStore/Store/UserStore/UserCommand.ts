import { IUserCommand } from "../../../Processor/User/Interface/IUserCommand";
import { Authtoken } from "../../../Processor/User/Model/Authtoken";
import { ZKUser } from "../../../Processor/User/Model/User";
import { commonClientPersistence } from "../../Configuration/CommonClientPerisistence";
import { BaseStore } from "../BaseStore";

export class UserCommand extends BaseStore<ZKUser> implements IUserCommand {
    async createUser(zkuser: ZKUser): Promise<ZKUser> {
        const rawJson = null;
        try {
            const persistence = new commonClientPersistence();
            const newZkuser = await persistence.db.zarkUser.create({
                data: JSON.parse(JSON.stringify(zkuser))
            });
            const rawJson = super.plainToEntityType(newZkuser);
        }
        catch (error) {

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
        try {
            const authtoken = zkuser.authToken;
            const persistence = new commonClientPersistence();
            let newToken = await persistence.db.authtoken.create({
                data: JSON.parse(JSON.stringify(authtoken))
            });
            zkuser.authToken = JSON.parse(JSON.stringify(newToken));
        }
        catch (error) {

        }
        return zkuser;
    }
    async getUserAuthToken(zkuid:number): Promise<any>{
        let refreshTokenArr:Authtoken=null;
        try {
            const persistence = new commonClientPersistence();
             let authToken = await persistence.db.authtoken.findMany({
                where:{
                    authUserId:{
                        equals:zkuid
                    }
                }
            });
            refreshTokenArr = JSON.parse(JSON.stringify(authToken));
        }
        catch(erro){

        }
        return refreshTokenArr;
    }

}