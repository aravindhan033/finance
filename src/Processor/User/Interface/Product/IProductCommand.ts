import { ZKProduct } from "../../Model/ProductModel";

export interface IProductCommand{
    create(zkcompany: ZKProduct): Promise<ZKProduct>;
    update(zkcompany: ZKProduct): Promise<ZKProduct>;
    delete(zkcompany: ZKProduct): Promise<void>;
}