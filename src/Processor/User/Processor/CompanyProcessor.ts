import { CompanyCommand } from "../../../DataStore/Store/CompanyStore/CompanyCommand";
import { ICompanyProcessor } from "../Interface/ICompanyProcessor";
import { ZarkCompany } from "../Model/Company";

export class CompanyProcessor implements ICompanyProcessor{
    public async createCompany(zkcompany:ZarkCompany):Promise<ZarkCompany>{
        const companyCommand = new CompanyCommand();
        let newCompany=await companyCommand.create(zkcompany);
        return newCompany;
    }

    public async updateCompanyDetails(zkcompany:ZarkCompany):Promise<ZarkCompany>{
        const companyCommand = new CompanyCommand();
        let updatedCompany=await companyCommand.update(zkcompany);
        return updatedCompany;
    }

}