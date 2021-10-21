import { TaxCommand } from "../../DataStore/Store/FinanceDataStore/TaxStore/TaxCommand";
import { TaxQuery } from "../../DataStore/Store/FinanceDataStore/TaxStore/TaxQuery";
import { ITaxProcessor } from "../Interface/Tax/ITaxProcessor";
import { ZKTax } from "../Model/ProductModel";

export class TaxProcessor implements ITaxProcessor{
    async getTax(zktaxid: number): Promise<ZKTax> {
        const taxQry= new TaxQuery();
        let newTax=await taxQry.get(zktaxid);
        return newTax;
    }
    
    async getAllTax(zkcid: number): Promise<ZKTax[]> {
        const taxQry= new TaxQuery();
        let newTax=await taxQry.getAll(null,zkcid)
        return newTax;
    }
    
    async addTax(zktax: ZKTax): Promise<ZKTax> {
        const taxCmd= new TaxCommand();
        let newTax=await taxCmd.create(zktax);
        return newTax;
    }
    async deleteTax(zktax: ZKTax): Promise<boolean> {
        const taxCmd= new TaxCommand();
        let newTax=await taxCmd.delete(zktax);
        return newTax;
    }

}