import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable()
export class RecentSearchInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const ctxRequest = context.switchToHttp().getRequest()
        const {query, token} = ctxRequest.query;

        return next.handle().pipe(tap((list)=>{
            if(token && query.trim().length()){
                console.log(list);
                console.log(token, query);      
            }
            catchError((err)=>{
                return throwError(()=> err);
            })
        }));

        
    }
}