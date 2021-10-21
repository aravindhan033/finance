import { ZKUnit } from "../../Model/ProductModel";

export interface ITaxQuery{
    get(zktaxid:number):Promise<ZKUnit>
    getAll(zktaxid:number[],zkcid:number):Promise<ZKUnit[]>    
}