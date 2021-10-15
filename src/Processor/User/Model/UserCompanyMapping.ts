import { USER_PROFILE } from "../../../../Schema/generated/financedb_client";

export interface  ZKUserCompanyMapping{
    zkcid :number,
    zkuid :number,    
    user_profile:USER_PROFILE
}