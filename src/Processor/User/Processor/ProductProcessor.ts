import { IProductProcessor } from "../Interface/Product/IProductProcessor";
import { IUnitProcessor } from "../Interface/Product/IUnitProcessor";
import { ZKProduct } from "../Model/ProductModel";
import { UnitProcessor } from "./UnitProcessor";

export class ProductProcessor implements IProductProcessor{
    async addProduct(zkproduct: ZKProduct): Promise<ZKProduct> {
        let newzkProduct:ZKProduct;
        try{
            if(zkproduct.zkp_unit_name!=null){                
                const unitProc= new UnitProcessor();
                zkproduct.zkp_unit= (await unitProc.findOrAddUnit(zkproduct.zkp_unit_name)).zk_unit_id;
            }


        }
        catch(error){
        
        }
        return newzkProduct;        
    }

    validateProduct(zkproduct: ZKProduct){
        

    }

}