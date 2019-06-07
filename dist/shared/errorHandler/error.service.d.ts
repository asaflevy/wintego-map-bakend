import { Model } from 'mongoose';
import { IerrorHandler } from './intefaces/Ierror.interface';
export declare class ErrorService {
    private readonly errorModel;
    constructor(errorModel: Model<IerrorHandler>);
    insert(newError: {
        path: any;
        code: number;
        method: any;
        message: null;
        timestamp: string;
    }): Promise<IerrorHandler>;
}
