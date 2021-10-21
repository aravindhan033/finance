import { PrismaClient } from "@prisma/client";
import { IUserCommand } from "../../../Processor/Interface/User/IUserCommand";
import { Authtoken } from "../../../Processor/Model/Authtoken";
import { ZKUser } from "../../../Processor/Model/User";
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
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    async updateUser(zkuser: ZKUser): Promise<ZKUser> {
        let rawJson = null;
        const persistence = new commonClientPersistence();
        try {
            const newZkuser = await persistence.db.zarkUser.update({
                where:{
                    zkuid:zkuser.zkuid
                },
                data: JSON.parse(JSON.stringify(zkuser))
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = super.plainToEntityType(newZkuser);
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    deleteUser(zkuser: ZKUser): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async addAuthToken(authToken: Authtoken): Promise<Authtoken> {
        const persistence = new commonClientPersistence();
        let newAuthToken={} as Authtoken;
        try {                        
            let newToken = await persistence.db.authtoken.create({
                data: JSON.parse(JSON.stringify(authToken))
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            newAuthToken= JSON.parse(JSON.stringify(newToken));
        }
        catch (error) {
            console.log(error);
        }
        finally {
            persistence.db.$disconnect();
        }
        return newAuthToken;
    }    
    async updateUserAccessToken(authToken:Authtoken):Promise<any>{
        const persistence = new commonClientPersistence();
        let newAuthToken={} as Authtoken;
        try {                        
            let newToken = await persistence.db.authtoken.update({
                where:{
                    authId:authToken.authId
                },
                data: {accessToken:authToken.accessToken}
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            newAuthToken= JSON.parse(JSON.stringify(newToken));
        }
        catch (error) {
            console.log(error);
        }
        finally {
            persistence.db.$disconnect();
        }
        return newAuthToken;
    }
    async deleteAuthToken(authToken:Authtoken):Promise<any>{
        const persistence = new commonClientPersistence();
        let newAuthToken={} as Authtoken;
        try {                        
            let newToken = await persistence.db.authtoken.delete({
                where:{
                    authId:authToken.authId
                },                
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            newAuthToken= JSON.parse(JSON.stringify(newToken));
        }
        catch (error) {
            console.log(error);
        }
        finally {
            persistence.db.$disconnect();
        }
        return newAuthToken;
    }

    async deleteUserAllAuthToken(authToken:Authtoken):Promise<any>{
        const persistence = new commonClientPersistence();
        let newAuthToken={} as Authtoken;
        try {                        
            let newToken = await persistence.db.authtoken.deleteMany({
                where:{
                    authUserId :authToken.authUserId
                },                
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            newAuthToken= JSON.parse(JSON.stringify(newToken));
        }
        catch (error) {
            console.log(error);
        }
        finally {
            persistence.db.$disconnect();
        }
        return newAuthToken;
    }

}