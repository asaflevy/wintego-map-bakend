import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {IloggerInterceptor} from './intefaces/logInterseptor.interface';

@Injectable()
export class LoggerService {

    constructor(@InjectModel('LogInterceptor') private readonly loggerModel: Model<IloggerInterceptor>) {
    }

    public async getAll(): Promise<any> {
        return await this.loggerModel.find({}).populate('fkLocation').sort('-created_date').exec();
    }

    public async insert(loggerInterceptor: IloggerInterceptor): Promise<IloggerInterceptor> {
        const log = new this.loggerModel(loggerInterceptor);
        return await log.save();
    }

}
