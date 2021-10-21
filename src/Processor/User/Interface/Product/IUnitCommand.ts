import {  ZKUnit } from "../../Model/ProductModel";

export interface IUnitCommand{
    create(zkunit: ZKUnit): Promise<ZKUnit>;
    update(zkunit: ZKUnit): Promise<ZKUnit>;
    delete(zkunit: ZKUnit): Promise<boolean>;
}