import { Model } from 'mongoose';
import { IloggerInterseptor } from './intefaces/logInterseptor.interface';
export declare class LogInterseptorService {
    private readonly errorModel;
    constructor(errorModel: Model<IloggerInterseptor>);
    insert(logInterseptor: IloggerInterseptor): Promise<IloggerInterseptor>;
}
