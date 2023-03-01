export interface users {
    "_id":string,
    "userName":string,
    "email":string,
    "phoneNumber":number,
    "time":Date,
    "address":address
    "ads":Array<string>
    "orders":Array<string>
}
export interface address{
    "blockNumber": Number,
    "st": String,
    "city": String,
    "area": String,
}