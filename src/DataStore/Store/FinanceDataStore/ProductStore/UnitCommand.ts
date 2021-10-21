import { IUnitCommand } from "../../../../Processor/Interface/Product/IUnitCommand";
import { ZKUnit } from "../../../../Processor/Model/ProductModel";
import { financeClientPersistence } from "../../../Configuration/FinanceClientPersistence";

export class UnitCommand implements IUnitCommand{
    async create(zkunit: ZKUnit): Promise<ZKUnit> {
        let rawJson = null;
        const persistence = new financeClientPersistence();
        try {
            const newdata = await persistence.db.zK_Unit.create({
                data: JSON.parse(JSON.stringify(zkunit))
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = JSON.parse(JSON.stringify(newdata));            
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    async update(zkunit: ZKUnit): Promise<ZKUnit> {
        let rawJson = null;
        const persistence = new financeClientPersistence();
        try {
            const newdata = await persistence.db.zK_Unit.update({
                where:{
                    zk_unit_id:zkunit.zk_unit_id
                },
                data: JSON.parse(JSON.stringify(zkunit))
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = JSON.parse(JSON.stringify(newdata));            
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    async delete(zkunit: ZKUnit): Promise<boolean> {
        let result = false;
        const persistence = new financeClientPersistence();
        try {
            const newdata = await persistence.db.zK_Unit.delete({
                where:{
                    zk_unit_id:zkunit.zk_unit_id
                },                
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            result = true
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return result;
    }

}