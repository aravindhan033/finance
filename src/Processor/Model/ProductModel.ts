import { PRODUCT_TYPE } from "../../../Schema/generated/financedb_client";


export interface ZKProduct {
    zkcid: number,
    zkpid: number,
    zkp_type: PRODUCT_TYPE,
    zkp_code: string,
    zkp_name: string,
    zkp_description: string,
    zkp_unit: number,
    zkp_unit_name:string,
    zkp_tax:ZKTax[],
    zkp_unit_selling_price: number,
    zkp_unit_cost_price: number,
    zkp_char1: string,
    zkp_char2: string,
    zkp_char3: string,
    zkp_char4: string,
    zkp_char5: string,
    zkp_number1: number,
    zkp_number2: number,
    zkp_number3: number,    
}

export interface ZKUnit{
    zkcid  :      number
    zk_unit_id:   number,
    zk_unit_name: string,
}

export interface ZKTax{
    zkcid       :number,
    zk_tax_id   :number 
    zk_tax_name :string,
    zk_tax_percentage: number
}