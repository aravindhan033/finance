import { ZKProduct } from "../../Model/ProductModel";

export interface IProductProcessor{
     addProduct(zkproduct:ZKProduct):Promise<ZKProduct> ;    
}