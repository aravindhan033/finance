import { CommonUtils } from "../../../../Library/CommonUtils";
import { IUnitQuery } from "../../../../Processor/Interface/Product/IUnitQuery";
import { ZKUnit } from "../../../../Processor/Model/ProductModel";
import { FinanceStoreQuery } from "../FinanceStoreQuery";

export class UnitQuery extends FinanceStoreQuery implements IUnitQuery{
    getAll(zkunitid: number[], zkcid: number): Promise<ZKUnit[]> {
        let result=super.fetchAll("zK_Unit",{OR:[
            {
                zk_unit_id:{
                    in:CommonUtils.convertNullToUndefined(zkunitid)
                }
            },
            {
                zkcid:{
                    equals:CommonUtils.convertNullToUndefined(zkcid) 
                }
            }
            ]});

        return result
    }
    get(zkunitid: number, zkunitname: string,zkcid:number): Promise<ZKUnit> {
        let result=super.fetch("zK_Unit",{
            OR:[
            {
                zk_unit_name:{
                    equals:CommonUtils.convertNullToUndefined(zkunitname)
                }
            },
            {
                zk_unit_id:{
                    equals:CommonUtils.convertNullToUndefined(zkunitid)
                }
            }
            ],
            AND:[{
                zkcid:{
                    equals:zkcid
                }
            }]
        }
        );

        return result
    }
    
    
    
    
}