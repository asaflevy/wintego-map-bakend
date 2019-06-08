import { Document } from 'mongoose';
export interface IloggerInterseptor extends Document {
    readonly message: string;
    readonly ip: string;
    readonly fkLocation: string;
}
