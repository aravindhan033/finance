import { rejects } from "assert";
import { ProductCommand } from "../../DataStore/Store/FinanceDataStore/ProductStore/ProductCommand";
import { ProductQuery } from "../../DataStore/Store/FinanceDataStore/ProductStore/ProductQuery";
import { IProductProcessor } from "../Interface/Product/IProductProcessor";
import { ZKProduct } from "../Model/ProductModel";
import { UnitProcessor } from "./UnitProcessor";

export class ProductProcessor implements IProductProcessor{
    async getProduct(zkpid:number):Promise<ZKProduct>{
        try{
            let zkProduct:ZKProduct;
            const prodQry= new ProductQuery();
            zkProduct =await prodQry.getProductById(zkpid)                       
            return zkProduct;
        }
        catch(err){
            Promise.reject()            
        }

    }
    async addProduct(zkproduct: ZKProduct,taxArray:number[]): Promise<ZKProduct> {
        let newzkProduct:ZKProduct;
        try{
            if(zkproduct.zkp_unit_name!=null){                
                const unitProc= new UnitProcessor();
                let zkUnit=await unitProc.findOrAddUnit(zkproduct.zkp_unit_name,zkproduct.zkcid);                
                zkproduct.zkp_unit= zkUnit!=null? zkUnit.zk_unit_id:null;
            }
            if(this.validateProduct(newzkProduct)){
                const productCmd=new ProductCommand();
                newzkProduct=await productCmd.create(zkproduct);
                productCmd.addProductTax(newzkProduct,taxArray);                
            }
        }
        catch(error){
        
        }
        return newzkProduct;        
    }
    
    async updateProduct(zkproduct: ZKProduct): Promise<ZKProduct> {
       return await null;      
    }

    async addProductTaxMapping(zkpid:number,zktaxid:number){



    }
    async deleteProductTaxMapping(zkpid:number,zktaxid:number){
        
    }


    validateProduct(zkproduct: ZKProduct):Boolean{

        return true;

    }

}