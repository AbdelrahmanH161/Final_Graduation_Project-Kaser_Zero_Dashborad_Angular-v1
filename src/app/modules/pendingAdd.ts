export interface pendingAdd{
    "pro":Array<pro>,
    "us":Array<user>,
}

export interface pro {
    "_id":string,
    "userId":string ,
    "categoryId":string,
    "title":string,
    "price":number,
    "description":string,
    "brand":string,
    "color":string,
    "durationOfUse":string,
    "time":Date,
    "img":Array<string>,
    "status":string,
    "able_to_exchange":string,
    "firstFilter":string,
    "secondFilter":string,
    "thirdFilter":string,
}

export interface user {
    "userName":string,
    "email":string,
    "phoneNumber":number,
    "time":Date,
}

export interface userProduct{
    porduct:pro;
    user:user;
  }

export interface category{
    "_id":string,
    "title":String,
    "brands":Array<string>,
    "firstFilter": {
        "title":string,
        "options":Array<string>,
      },
      "secondFilter": {
        "title":string,
        "options":Array<string>,
      }
      "thirdFilter": {
        "title":string,
        "options":Array<string>,
      }
}