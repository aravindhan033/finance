import { ITaxCommand } from "../../../../Processor/Interface/Tax/ITaxCommand";
import { ZKTax } from "../../../../Processor/Model/ProductModel";
import { financeClientPersistence } from "../../../Configuration/FinanceClientPersistence";
import { FinanceStoreCommand } from "../FinanceStoreCommand";

export class TaxCommand extends FinanceStoreCommand implements ITaxCommand {
    async create(zktax: ZKTax): Promise<ZKTax> {
        let result= await super.create("zK_Tax",JSON.parse(JSON.stringify(zktax))) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;       
    }
    async update(zktax: ZKTax): Promise<ZKTax> {
        let result= await super.update("zK_Tax",{zk_tax_id:zktax.zk_tax_id},{zk_tax_name:zktax.zk_tax_name,zk_tax_percentage:zktax.zk_tax_percentage}) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;    
    }
    async delete(zktax: ZKTax): Promise<boolean> {
        let result= await super.delete("zK_Tax",{zk_tax_id:zktax.zk_tax_id}) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;    
    }
    

} 