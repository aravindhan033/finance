import { USER_PROFILE } from "../../../Schema/generated/financedb_client";
import { CompanyCommand } from "../../DataStore/Store/CompanyStore/CompanyCommand";
import { ICompanyProcessor } from "../Interface/Company/ICompanyProcessor";
import { ZarkCompany } from "../Model/Company";
import { UserCompanyProcessor } from "./UserCompanyProcessor";

export class CompanyProcessor implements ICompanyProcessor{
    public async createCompany(zkcompany:ZarkCompany):Promise<ZarkCompany>{
        const companyCommand = new CompanyCommand();
        let newCompany=await companyCommand.create(zkcompany);   
        if(newCompany==null || newCompany.zkcid==null){
            return null;
        }
        /**
        This process has to be moved out since in future 
        */
        const userCompanyProcessor= new UserCompanyProcessor()
        await userCompanyProcessor.addUserToCompany(zkcompany.createdBy,newCompany.zkcid,USER_PROFILE.PORTAL_OWNER);
        /** */
        return newCompany;
    }

    public async updateCompanyDetails(zkcompany:ZarkCompany):Promise<ZarkCompany>{
        const companyCommand = new CompanyCommand();
        let updatedCompany=await companyCommand.update(zkcompany);
        return updatedCompany;
    }    


    
}