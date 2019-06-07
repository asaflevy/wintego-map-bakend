import {Document} from 'mongoose';

export interface IerrorHandler extends Document {
    readonly status: string;
    readonly timestamp: string;
    readonly path: string;
    readonly method: string;
    readonly message: string;
    readonly  ip: string;
    readonly created_date: Date;
}
