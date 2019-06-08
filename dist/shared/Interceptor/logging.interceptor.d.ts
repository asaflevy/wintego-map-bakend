import { NestInterceptor, ExecutionContext, CallHandler, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LogInterseptorService } from './logInterseptor.service';
import { LocationService } from '../location/location.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private logSrv;
    private locationSrv;
    private readonly httpService;
    constructor(logSrv: LogInterseptorService, locationSrv: LocationService, httpService: HttpService);
    intercept(context: ExecutionContext, call$: CallHandler): Observable<any>;
    private getClientIp;
}
