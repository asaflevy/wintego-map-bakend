import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {ILoggingInterceptor} from './intefaces/logInterseptor.interface';

@Injectable()
export class LogInterseptorService {

    constructor(@InjectModel('LogInterseptor') private readonly errorModel: Model<ILoggingInterceptor>) {
    }

    public async insert(logInterseptor: { message: string }): Promise<ILoggingInterceptor> {
        const log = new this.errorModel(logInterseptor);
        return await log.save();
    }

}
