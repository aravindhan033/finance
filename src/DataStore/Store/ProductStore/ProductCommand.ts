
import { IProductCommand } from "../../../Processor/User/Interface/Product/IProductCommand";
import { ZKProduct } from "../../../Processor/User/Model/ProductModel";
import { financeClientPersistence } from "../../Configuration/FinanceClientPersistence";
import { BaseStore } from "../BaseStore";

export class ProductCommand extends BaseStore<ZKProduct> implements IProductCommand {
    async create(zkproduct: ZKProduct): Promise<ZKProduct> {
        let rawJson = null;
        const persistence = new financeClientPersistence();
        try {
            const newzkproduct = await persistence.db.zKProduct.create({
                data: JSON.parse(JSON.stringify(zkproduct))
            }).catch((err) => {
                throw (err)
            }).finally(async () => {
                persistence.db.$disconnect();
            });
            rawJson = super.plainToEntityType(newzkproduct);
        }
        catch (error) {
            console.log(error.message);
        }
        finally {
            persistence.db.$disconnect();
        }
        return rawJson;
    }
    update(zkcompany: ZKProduct): Promise<ZKProduct> {
        throw new Error("Method not implemented.");
    }
    delete(zkcompany: ZKProduct): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}