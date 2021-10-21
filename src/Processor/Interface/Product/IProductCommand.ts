import { ZKProduct } from "../../Model/ProductModel";

export interface IProductCommand{
    create(zkproduct: ZKProduct): Promise<ZKProduct>;
    update(zkproduct: ZKProduct): Promise<ZKProduct>;
    delete(zkproduct: ZKProduct): Promise<boolean>;
}