import { ITaxQuery } from "../../../../Processor/User/Interface/Tax/ITaxQuery";
import { ZKUnit } from "../../../../Processor/User/Model/ProductModel";
import { FinanceStoreQuery } from "../FinanceStoreQuery";

export class TaxQuery extends FinanceStoreQuery implements ITaxQuery{
    get(zktaxid: number): Promise<ZKUnit> {
        let result = super.fetch("zK_Tax",{where:{
            zk_tax_id:{
                equals:zktaxid
            }
        }})
        return result;
    }
    getAll(zktaxid: number[], zkcid: number): Promise<ZKUnit[]> {
        let result = super.fetchAll("zK_Tax",{where:{
            OR:[{
                zk_tax_id:{
                    in:zktaxid
                }
            },
            {
                zkcid:{
                    equals:zkcid
                }
            }
        ]
            
        }})
        return result;
    }
    
}