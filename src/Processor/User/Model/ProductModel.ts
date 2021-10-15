import { PRODUCT_TYPE } from "../../../../Schema/generated/financedb_client";


export interface ZKProduct {
    zkcid: number,
    zkpid: number,
    zkp_type: PRODUCT_TYPE,
    zkp_code: String,
    zkp_name: String,
    zkp_description: String,
    zkp_unit: number,
    zkp_unit_name:String,
    zkp_tax:ZKTax[],
    zkp_unit_selling_price: number,
    zkp_unit_cost_price: number,
    zkp_char1: String,
    zkp_char2: String,
    zkp_char3: String,
    zkp_char4: String,
    zkp_char5: String,
    zkp_number1: number,
    zkp_number2: number,
    zkp_number3: number,    
}

export interface ZKUnit{
    zkcid  :      number
    zk_unit_id:   number,
    zk_unit_name: String,
}

export interface ZKTax{
    zkcid       :number,
    zk_tax_id   :number 
    zk_tax_name :String,
    zk_tax_percentage: number
}