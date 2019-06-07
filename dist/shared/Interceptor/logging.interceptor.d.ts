import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LogInterseptorService } from './logInterseptor.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private logSrv;
    constructor(logSrv: LogInterseptorService);
    intercept(context: ExecutionContext, call$: CallHandler): Observable<any>;
}
