
import { IProductCommand } from "../../../../Processor/Interface/Product/IProductCommand";
import { ZKProduct } from "../../../../Processor/Model/ProductModel";
import { FinanceStoreCommand } from "../FinanceStoreCommand";

export class ProductCommand extends FinanceStoreCommand implements IProductCommand {
    async addProductTax(zkproduct: ZKProduct,zktaxid:number[]): Promise<boolean> {
        let insertData=[];
        for(let i=0;i<zktaxid.length;i++){
            insertData.push({zk_tax_id:zktaxid[i],zkpid:zkproduct.zkpid,zkcid:zkproduct.zkcid})
        }
        let result= await super.createMany("zK_Product_Tax_Mapping",insertData) ;
        return result!=null? true:false;       
    }
    async deleteProductTax(zkproduct: ZKProduct,zktaxid:number[]): Promise<boolean> {
        let result= await super.delete("zK_Product_Tax_Mapping",{zk_tax_id:{in:[zktaxid]},zkpid:zkproduct.zkpid,zkcid:zkproduct.zkcid}) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;       
    }
    async create(zkproduct: ZKProduct): Promise<ZKProduct> {
        delete zkproduct.zkp_unit_name;
        let result= await super.create("zKProduct",JSON.parse(JSON.stringify(zkproduct))) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;       
    }
    async update(zkproduct: ZKProduct): Promise<ZKProduct> {
        let result=await super.update("zKProduct",{zkpid:zkproduct.zkpid},JSON.parse(JSON.stringify(zkproduct))) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;               
    }
    async delete(zkproduct: ZKProduct): Promise<boolean> {
        let result=await super.delete("zKProduct",{zkpid:zkproduct.zkpid}) ;
        return result!=null? JSON.parse(JSON.stringify(result)):result;               
    }
    
}