export interface IOrderCommand{
    addOrder(order_detail:any):Promise<any>;
    updateOrder(orderId:number,order_detail:any):Promise<any>;
    addCustomer(customer_detail:any):Promise<any>;
    addShippingAddress(shipping_detail:any,customer:number):Promise<any>;
    updateShippingAddress(shipping_id:number,shipping_detail:any,customer:number):Promise<any>;
    deleteShippingAddress(shipping_id:number):Promise<any>;
} 