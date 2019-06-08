import { LoggerInterceptorService } from './logger-Interseptor.service';
export declare class LoggerInterseptorController {
    private loggerInterceptorSrv;
    constructor(loggerInterceptorSrv: LoggerInterceptorService);
    getAll(): Promise<any>;
}
