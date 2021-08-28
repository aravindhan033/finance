import { ZarkCompany } from "../../Model/Company";

export interface ICompanyQuery{
    get(zkcompany: ZarkCompany): Promise<ZarkCompany>;    
}