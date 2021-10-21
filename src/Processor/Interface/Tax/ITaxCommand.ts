import { ZKTax } from "../../Model/ProductModel";

export interface ITaxCommand{
    create(zkcompany: ZKTax): Promise<ZKTax>;
    update(zkcompany: ZKTax): Promise<ZKTax>;
    delete(zkcompany: ZKTax): Promise<Boolean>;
}