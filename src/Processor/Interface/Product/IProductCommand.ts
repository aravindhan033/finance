import { ZKProduct } from "../../Model/ProductModel";

export interface IProductCommand{
    create(zkproduct: ZKProduct): Promise<ZKProduct>;
    addProductTax(zkproduct: ZKProduct,zktaxid:number[]): Promise<boolean>;
    deleteProductTax(zkproduct: ZKProduct,zktaxid:number[]): Promise<boolean>;
    update(zkproduct: ZKProduct): Promise<ZKProduct>;
    delete(zkproduct: ZKProduct): Promise<boolean>;
}