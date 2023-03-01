export interface BuyingOrdersResponse{
    buyingOrders:[
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
            img:Array<string>
        },
    }]
}

export interface data{
    "order":buyingOrders
    "ordersDetails":ordersDetails
}
export interface ordersDetails{
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
        img:Array<string>
    },
}

 export interface buyingOrders{
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