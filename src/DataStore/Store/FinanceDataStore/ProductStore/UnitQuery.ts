import { IUnitQuery } from "../../../../Processor/Interface/Product/IUnitQuery";
import { ZKUnit } from "../../../../Processor/Model/ProductModel";
import { FinanceStoreQuery } from "../FinanceStoreQuery";

export class UnitQuery extends FinanceStoreQuery implements IUnitQuery{
    getAll(zkunitid: number[], zkcid: number): Promise<ZKUnit[]> {
        let result=super.fetchAll("zK_Unit",{where:{OR:[
            {
                zk_unit_id:{
                    in:zkunitid
                }
            },
            {
                zkcid:{
                    equals:zkcid
                }
            }
            ]}});

        return result
    }
    get(zkunitid: number, zkunitname: string,zkcid:number): Promise<ZKUnit> {
        let result=super.fetch("zK_Unit",{where:{
            OR:[
            {
                zk_unit_name:{
                    equals:zkunitname
                }
            },
            {
                zkunitid:{
                    equals:zkunitid
                }
            }
            ],
            AND:[{
                zkcid:{
                    equals:zkcid
                }
            }]
        }
        });

        return result
    }
    
    
    
    
}