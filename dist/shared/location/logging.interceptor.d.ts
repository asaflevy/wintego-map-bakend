import { NestInterceptor, ExecutionContext, CallHandler, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LogInterseptorService } from './logInterseptor.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private logSrv;
    private readonly httpService;
    constructor(logSrv: LogInterseptorService, httpService: HttpService);
    intercept(context: ExecutionContext, call$: CallHandler): Observable<any>;
    private getClientIp;
}
