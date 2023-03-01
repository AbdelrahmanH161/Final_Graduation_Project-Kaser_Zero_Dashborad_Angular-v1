export interface deliveredOrdersResponse{
    deliveredOrders:[
        {
            _id:string,
            addressfrom:{
                blockNumber: Number,
                st: String,
                city: String,
                area: String,
            },
            addressto:{
                blockNumber: Number,
                st: String,
                city: String,
                area: String,
            },
            exchangeProperties:{
                productId:string,
                productPrice:number,
                profit:number,
                shipping:number,
                status:string,
                paymentmethod:string,
            },
            buyerId:string,
            exchangable:boolean,
            paymentmethod:string,
            productId:string,
            productPrice:number,
            profit:number,
            sellerId:string,
            shipping:number,
            status:string,
            time:string
        }
    ],
    ordersDetails:[{
        orderBuyerDetails:{
            userName:string,
            phoneNumber:string,
            address:[],
        },
        orderSellerDetails:{
            userName:string,
            phoneNumber:string,
            address:[],
        },
        orderProductDetails:{
            title:string,
            img:[]
        },
    }]
}