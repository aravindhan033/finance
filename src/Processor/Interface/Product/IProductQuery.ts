import { ZKProduct } from "../../Model/ProductModel";

export interface IProductQuery{
    getProductById(zkpid:number):Promise<ZKProduct>;
    getProductByFilter(fiter_object:JSON):Promise<ZKProduct[]>;
}