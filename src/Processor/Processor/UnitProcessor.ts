import { UnitCommand } from "../../DataStore/Store/FinanceDataStore/ProductStore/UnitCommand";
import { UnitQuery } from "../../DataStore/Store/FinanceDataStore/ProductStore/UnitQuery";
import { IUnitProcessor } from "../Interface/Product/IUnitProcessor";
import { ZKUnit } from "../Model/ProductModel";

export class UnitProcessor implements IUnitProcessor{
    async findOrAddUnit(unitName: string,zkcid:number): Promise<ZKUnit> {
        let zkunit:ZKUnit=null;
        zkunit=await this.findUnit(unitName.trim(),zkcid);
        if(zkunit==null){
            zkunit={} as ZKUnit;
            zkunit.zk_unit_name=unitName;
            zkunit.zkcid=zkcid;
            zkunit=await this.addUnit(zkunit);
        }
        return zkunit;
    }
    async addUnit(zkunit: ZKUnit): Promise<ZKUnit> {
        const unitCmd= new UnitCommand();
        return await unitCmd.create(zkunit);

    }
    
    async findUnit(unitName: string,zkcid:number): Promise<ZKUnit> {
        const unitQuery= new UnitQuery();
        let zkUnit:ZKUnit=await unitQuery.get(null,unitName,zkcid);
        return zkUnit;        
    }
    
}