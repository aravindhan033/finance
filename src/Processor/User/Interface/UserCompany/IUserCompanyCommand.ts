import { USER_PROFILE } from "../../../../../Schema/generated/financedb_client";

export interface IUserCompanyCommand{
    addUserToCompany(zkuid:number,zkcid:number,user_profile:USER_PROFILE):Promise<Boolean>;
    updateUserProfile(zkuid:number,zkcid:number,user_profile:USER_PROFILE):Promise<Boolean>;
    deleteUserFromCompany(zkuid:number,zkcid:number):Promise<Boolean>;
}