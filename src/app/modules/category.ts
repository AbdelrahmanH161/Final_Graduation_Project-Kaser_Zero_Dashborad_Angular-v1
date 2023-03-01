export interface ICategory{
    title:string,
    brands:[],
    firstFilter:{
        title:string,
        options:[]
    },
    secondFilter:{
        title:string,
        options:[]
    },
    thirdFilter:{
        title:string,
        options:[]
    },
}