import { NestInterceptor, ExecutionContext, CallHandler, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LocationService } from '../shared/location/location.service';
import { LoggerInterceptorService } from './logger-Interseptor.service';
export declare class LoggingInterceptor implements NestInterceptor {
    private logSrv;
    private locationSrv;
    private readonly httpService;
    constructor(logSrv: LoggerInterceptorService, locationSrv: LocationService, httpService: HttpService);
    intercept(context: ExecutionContext, call$: CallHandler): Observable<any>;
    private getClientIp;
}
