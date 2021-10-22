import { ZKProduct } from "../../Model/ProductModel";

export interface IProductProcessor{
     addProduct(zkproduct:ZKProduct,taxArray:number[]):Promise<ZKProduct> ;    
}