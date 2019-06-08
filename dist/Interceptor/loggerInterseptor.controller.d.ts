import { LoggerInterseptorSerivce } from './logger-interseptor-serivce.service';
export declare class LoggerInterseptorController {
    private loggerInterseptorSrv;
    constructor(loggerInterseptorSrv: LoggerInterseptorSerivce);
    getAll(): Promise<any>;
}
