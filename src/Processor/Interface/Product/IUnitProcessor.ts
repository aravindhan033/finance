import { ZKUnit } from "../../Model/ProductModel";

export interface IUnitProcessor{
     addUnit(zkunit:ZKUnit):Promise<ZKUnit> ;    
     findUnit(unitName:string ,zkcid:number):Promise<ZKUnit> ;         
      findOrAddUnit(unitName:string ,zkcid:number):Promise<ZKUnit> ;         
}