export interface IOrderQuery{
    getOrder(order_id:number):Promise<any>;    
    getAllOrders(customerId:number,filter_object:any):Promise<any>;
    getCustomerShippingDetail(customerId:number):Promise<any>;
}