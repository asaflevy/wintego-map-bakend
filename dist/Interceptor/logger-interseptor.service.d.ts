import { Model } from 'mongoose';
import { IloggerInterceptor } from './intefaces/logInterseptor.interface';
export declare class LoggerInterceptorService {
    private readonly loggerModel;
    constructor(loggerModel: Model<IloggerInterceptor>);
    getAll(): Promise<any>;
    insert(loggerInterceptor: IloggerInterceptor): Promise<IloggerInterceptor>;
}
