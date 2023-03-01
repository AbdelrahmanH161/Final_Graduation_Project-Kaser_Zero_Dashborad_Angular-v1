import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "./Api/loader.interceptor";

export const HttpInterceptors=[
    {provide: HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true},
]