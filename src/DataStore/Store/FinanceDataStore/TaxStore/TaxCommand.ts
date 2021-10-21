import { ITaxCommand } from "../../../../Processor/User/Interface/Tax/ITaxCommand";
import { ZKTax } from "../../../../Processor/User/Model/ProductModel";
import { financeClientPersistence } from "../../../Configuration/FinanceClientPersistence";

export class TaxCommand  implements ITaxCommand {
    async create(zktax: ZKTax): Promise<ZKTax> {
        let rawJson = null;
        const persistence = new financeClientPersistence();
        try {
            const newzktax = await persistence.db.zK_Tax.create({
                data: JSON.parse(JSON.stringify(zktax))
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = JSON.parse(JSON.stringify(newzktax));            
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    async update(zktax: ZKTax): Promise<ZKTax> {
        let rawJson = null;
        const persistence = new financeClientPersistence();
        try {
            const newzktax = await persistence.db.zK_Tax.update({
                where:{
                    zk_tax_id:zktax.zk_tax_id
                },
                data: {zk_tax_name:zktax.zk_tax_name,zk_tax_percentage:zktax.zk_tax_percentage}
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = JSON.parse(JSON.stringify(newzktax));            
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    async delete(zktax: ZKTax): Promise<Boolean> {
        let result = false;
        const persistence = new financeClientPersistence();
        try {
            const newzktax = await persistence.db.zK_Tax.delete({
                where:{
                    zk_tax_id:zktax.zk_tax_id
                },                
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            result = true;
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