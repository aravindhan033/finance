import { ZKTax } from "../../Model/ProductModel";

export interface ITaxProcessor{
    addTax(zktax:ZKTax):Promise<ZKTax>;    
    getTax(zktaxid:number):Promise<ZKTax>;    
    deleteTax(zktax:ZKTax):Promise<boolean>;
}