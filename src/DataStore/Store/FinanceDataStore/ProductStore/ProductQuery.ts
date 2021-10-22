import { IProductQuery } from "../../../../Processor/Interface/Product/IProductQuery";
import { ZKProduct } from "../../../../Processor/Model/ProductModel";
import { FinanceStoreQuery } from "../FinanceStoreQuery";

export class ProductQuery extends FinanceStoreQuery implements IProductQuery{
    getProductById(zkpid:number): Promise<ZKProduct> {
        let product= super.fetchWithConditionAndJoin("zKProduct",{where:{zkpid:BigInt(zkpid)},include:{ZK_Unit:true}} )
        return product!=null?product:null;
    }
    getProductByFilter(): Promise<ZKProduct[]> {
        throw new Error("Method not implemented.");
    }

}