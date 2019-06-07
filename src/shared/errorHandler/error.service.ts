import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {IerrorHandler} from './intefaces/Ierror.interface';

@Injectable()
export class ErrorService {

    constructor(@InjectModel('Error') private readonly errorModel: Model<IerrorHandler>) {
    }

    public async insert(newError: { path: any; code: number; method: any; message: null; timestamp: string }): Promise<IerrorHandler> {
        const createError = new this.errorModel(newError);
        return await createError.save();
    }

}
