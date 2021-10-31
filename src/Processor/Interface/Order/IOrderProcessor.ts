export interface IOrderProcessor{
     createOrder(orderDetails:any):Promise<any>;
     createCustomer(customer_details:any):Promise<any>;
     mapShippingAddress(customer_details:any):Promise<any>;     
}