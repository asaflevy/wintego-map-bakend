import { LoggerInterceptorService } from './logger-Interseptor.service';
export declare class LoggerInterceptorController {
    private loggerInterceptorSrv;
    constructor(loggerInterceptorSrv: LoggerInterceptorService);
    getAll(): Promise<any>;
}
