import { ZKTax } from "../../Model/ProductModel";

export interface ITaxQuery{
    get(zktaxid:number):Promise<ZKTax>
    getAll(zktaxid:number[],zkcid:number):Promise<ZKTax[]>    
}