import { CommonUtils } from "../../../../Library/CommonUtils";
import { ITaxQuery } from "../../../../Processor/Interface/Tax/ITaxQuery";
import { ZKTax, ZKUnit } from "../../../../Processor/Model/ProductModel";
import { FinanceStoreQuery } from "../FinanceStoreQuery";

export class TaxQuery extends FinanceStoreQuery implements ITaxQuery{
    get(zktaxid: number): Promise<ZKTax> {
        let result = super.fetch("zK_Tax",{
            zk_tax_id:{
                equals:CommonUtils.convertNullToUndefined(zktaxid)
            }
        })
        return result;
    }
    getAll(zktaxid: number[], zkcid: number): Promise<ZKTax[]> {
        let result = super.fetchAll("zK_Tax",{
            OR:[{
                zk_tax_id:{
                    in:CommonUtils.convertNullToUndefined(zktaxid)
                }
            },
            {
                zkcid:{
                    equals:CommonUtils.convertNullToUndefined(zkcid)
                }
            }
        ]
            
        })
        return result;
    }
    
}