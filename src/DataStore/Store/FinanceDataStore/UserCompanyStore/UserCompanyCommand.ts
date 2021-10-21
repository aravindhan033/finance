import { USER_PROFILE } from "../../../../../Schema/generated/financedb_client";
import { IUserCompanyCommand } from "../../../../Processor/User/Interface/UserCompany/IUserCompanyCommand";
import { financeClientPersistence } from "../../../Configuration/FinanceClientPersistence";

export class UserCompanyCommand  implements IUserCompanyCommand {
    async addUserToCompany(zkuid: number, zkcid: number, user_profile: USER_PROFILE): Promise<Boolean> {
        let rawJson = null;
        const persistence = new financeClientPersistence();
        try {
            const newzkcompany = await persistence.db.zKUserCompanyMapping.create({
                data: {
                    zkuid:zkuid,
                    zkcid:zkcid,
                    user_profile:user_profile                    
                }
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = JSON.parse(JSON.stringify(newzkcompany));
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    async updateUserProfile(zkuid: number, zkcid: number, user_profile: USER_PROFILE): Promise<Boolean> {
        let result = false;
        const persistence = new financeClientPersistence();
        try {
            const updatedzkcompany = await persistence.db.zKUserCompanyMapping.update({
                where:{  
                    zkuid_zkcid:{
                        zkcid:zkcid,
                        zkuid:zkuid
                    }                                     
                },
                data: {user_profile:user_profile}
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            result = true;
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return result ;
    }
    async deleteUserFromCompany(zkuid: number, zkcid: number): Promise<Boolean> {
        let result = false;
        const persistence = new financeClientPersistence();
        try {
            const updatedzkcompany = await persistence.db.zKUserCompanyMapping.delete({
                where:{  
                    zkuid_zkcid:{
                        zkcid:zkcid,
                        zkuid:zkuid
                    }                                     
                },                
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            result = true;
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return result ;
    }

} 