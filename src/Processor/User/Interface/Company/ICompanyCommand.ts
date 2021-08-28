import { ZarkCompany } from "../../Model/Company";

export interface ICompanyCommand{
    create(zkcompany: ZarkCompany): Promise<ZarkCompany>;
    update(zkcompany: ZarkCompany): Promise<ZarkCompany>;
    delete(zkcompany: ZarkCompany): Promise<void>;
}