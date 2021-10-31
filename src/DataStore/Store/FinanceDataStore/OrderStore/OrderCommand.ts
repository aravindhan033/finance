import { IOrderCommand } from "../../../../Processor/Interface/Order/IOrderCommand";
import { FinanceStoreCommand } from "../FinanceStoreCommand";

export class OrderCommand extends FinanceStoreCommand implements IOrderCommand {
    zkcid:number;
    OrderCommand(zkcid:number){
        this.zkcid=zkcid;
    }
    addOrder(order_detail: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateOrder(orderId: number, order_detail: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    addCustomer(customer_detail: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    addShippingAddress(shipping_detail: any, customer: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateShippingAddress(shipping_id: number, shipping_detail: any, customer: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteShippingAddress(shipping_id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}