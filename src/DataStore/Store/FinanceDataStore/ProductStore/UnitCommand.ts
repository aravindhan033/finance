import { IUnitCommand } from "../../../../Processor/Interface/Product/IUnitCommand";
import { ZKUnit } from "../../../../Processor/Model/ProductModel";
import { financeClientPersistence } from "../../../Configuration/FinanceClientPersistence";
import { FinanceStoreCommand } from "../FinanceStoreCommand";

export class UnitCommand extends FinanceStoreCommand implements IUnitCommand{
    async create(zkunit: ZKUnit): Promise<ZKUnit> {
        let result= await super.create("zK_Unit",JSON.parse(JSON.stringify(zkunit))) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;       
    }
    async update(zkunit: ZKUnit): Promise<ZKUnit> {
        let result= await super.update("zK_Unit",{zk_unit_id:zkunit.zk_unit_id},JSON.parse(JSON.stringify(zkunit))) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;       
    }
    async delete(zkunit: ZKUnit): Promise<boolean> {
        
        let result= await super.delete("zK_Unit",{zk_unit_id:zkunit.zk_unit_id}) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;       
    }

}