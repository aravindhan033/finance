
import { IProductCommand } from "../../../../Processor/Interface/Product/IProductCommand";
import { ZKProduct } from "../../../../Processor/Model/ProductModel";
import { FinanceStoreCommand } from "../FinanceStoreCommand";

export class ProductCommand extends FinanceStoreCommand implements IProductCommand {
    async create(zkproduct: ZKProduct): Promise<ZKProduct> {
        let result= super.create("zKProduct",JSON.parse(JSON.stringify(zkproduct))) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;       
    }
    async update(zkproduct: ZKProduct): Promise<ZKProduct> {
        let result= super.update("zKProduct",{where:{zkpid:zkproduct.zkpid}},JSON.parse(JSON.stringify(zkproduct))) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;               
    }
    async delete(zkproduct: ZKProduct): Promise<boolean> {
        let result= super.delete("zKProduct",{where:{zkpid:zkproduct.zkpid}}) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;               
    }
    
}