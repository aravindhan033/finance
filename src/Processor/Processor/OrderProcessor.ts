import { IOrderProcessor } from "../Interface/Order/IOrderProcessor";
export class OrderProcessor implements IOrderProcessor{
    zkcid:number;    
    OrderProcessor(zkcid:number){
        this.zkcid=zkcid;
    }   
    
    createOrder(orderDetails: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    createCustomer(customer_details: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    mapShippingAddress(customer_details: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
    
}