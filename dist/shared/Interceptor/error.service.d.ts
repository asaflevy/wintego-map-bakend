import { Model } from 'mongoose';
import { IInterseptor } from './intefaces/Ierror.interface';
export declare class ErrorService {
    private readonly errorModel;
    constructor(errorModel: Model<IInterseptor>);
    insert(newError: {
        path: any;
        code: number;
        method: any;
        message: null;
        timestamp: string;
    }): Promise<IInterseptor>;
}
