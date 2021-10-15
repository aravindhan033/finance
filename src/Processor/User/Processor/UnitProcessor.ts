import { IUnitProcessor } from "../Interface/Product/IUnitProcessor";
import { ZKUnit } from "../Model/ProductModel";

export class UnitProcessor implements IUnitProcessor{
    findOrAddUnit(unitName: String): Promise<ZKUnit> {
        throw new Error("Method not implemented.");
    }
    addUnit(zkunit: ZKUnit): Promise<ZKUnit> {
        throw new Error("Method not implemented.");
    }
    findUnit(unitName: String): Promise<ZKUnit> {
        throw new Error("Method not implemented.");
    }
    
}