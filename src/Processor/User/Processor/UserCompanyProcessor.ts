import { USER_PROFILE } from "../../../../Schema/generated/financedb_client";
import { UserCompanyCommand } from "../../../DataStore/Store/FinanceDataStore/UserCompanyStore/UserCompanyCommand";

export class UserCompanyProcessor{

    public async addUserToCompany(zkuid: number, zkcid: number, user_profile: USER_PROFILE):Promise<Boolean>{
        if(zkuid!=null && zkcid!=null){
            const userCompanyCommand= new UserCompanyCommand();
            await userCompanyCommand.addUserToCompany(zkuid,zkcid,user_profile);
            return true;
        }
        else{
            return false;
        }

    }
    
}