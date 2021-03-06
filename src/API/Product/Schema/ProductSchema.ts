export const addProduct={
    body:{
        type:"object",
        properties:{
            product:{
                type:"object",
                properties:{                
                    zkp_type:{type:"string"},
                    zkp_code:{type:"string"},
                    zkp_name:{type:"string"},
                    zkp_description:{type:"string"},
                    zkp_unit:{type:"number"},
                    zkp_unit_name:{type:"string"},
                    zkp_tax:{type:"array"},
                    zkp_unit_selling_price:{type:"number"},
                    zkp_unit_cost_price:{type:"number"},
                    zkp_char1:{type:"array"},
                    zkp_char2:{type:"string"},
                    zkp_char3:{type:"string"},
                    zkp_char4:{type:"string"},
                    zkp_char5:{type:"string"},
                    zkp_number1:{type:"number"},
                    zkp_number2:{type:"number"},
                    zkp_number3:{type:"number"}
                },            
                required:["zkp_type","zkp_name","zkp_unit_selling_price","zkp_unit_cost_price"]
            },
            tax:{type:"array"}
            
        },
        
    }
}

export const addtax={
    body:{
        type:"object",
        properties:{            
            zk_tax_name:{type:"string"},
            zk_tax_percentage:{type:"number"},
        },
        required:["zk_tax_name","zk_tax_percentage"]
    }
}