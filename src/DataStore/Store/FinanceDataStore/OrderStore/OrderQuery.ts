import { IOrderQuery } from "../../../../Processor/Interface/Order/IOrderQuery";
import { FinanceStoreQuery } from "../FinanceStoreQuery";

export class OrderQuery extends FinanceStoreQuery implements IOrderQuery{
    getOrder(order_id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getAllOrders(customerId: number, filter_object: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getCustomerShippingDetail(customerId: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

}