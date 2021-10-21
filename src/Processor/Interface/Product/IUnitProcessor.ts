import { ZKUnit } from "../../Model/ProductModel";

export interface IUnitProcessor{
     addUnit(zkunit:ZKUnit):Promise<ZKUnit> ;    
     findUnit(unitName:String ):Promise<ZKUnit> ;         
     findOrAddUnit(unitName:String ):Promise<ZKUnit> ;         
}