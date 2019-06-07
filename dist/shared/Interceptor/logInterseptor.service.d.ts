import { Model } from 'mongoose';
import { ILoggingInterceptor } from './intefaces/logInterseptor.interface';
export declare class LogInterseptorService {
    private readonly errorModel;
    constructor(errorModel: Model<ILoggingInterceptor>);
    insert(logInterseptor: {
        message: string;
    }): Promise<ILoggingInterceptor>;
}
