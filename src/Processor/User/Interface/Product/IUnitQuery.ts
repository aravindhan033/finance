import { ZKUnit } from "../../Model/ProductModel";

export interface IUnitQuery{
    get(zkunitid:number,zkunitname:string,zkcid:number):Promise<ZKUnit>;
    getAll(zkunitid:number[],zkcid:number):Promise<ZKUnit[]>;        
}