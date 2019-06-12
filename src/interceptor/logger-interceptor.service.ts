import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    Logger, CallHandler, HttpService,
} from '@nestjs/common';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import * as ipApi from 'ipapi.co';
import {LocationService} from '../shared/location/location.service';
import {IloggerInterceptor} from './intefaces/logInterseptor.interface';
import {LoggerInterceptorService} from './logger-Interseptor.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    constructor(private logSrv: LoggerInterceptorService, private locationSrv: LocationService, private readonly httpService: HttpService) {
    }

    intercept(context: ExecutionContext, call$: CallHandler): Observable<any> {
        const now = Date.now();
        const req = context.switchToHttp().getRequest();
        if (req) {
            const method = req.method;
            const url = req.url;

            return call$.handle().pipe(
                tap(async () => {
                        const ip = this.getClientIp(req);
                        const locationResult = await this.httpService.get(`https://ipapi.co/json/`).toPromise();
                        const locationDoc = await this.locationSrv.insert(locationResult.data);
                        const logInter = `Interceptor ${method} ${url} ${Date.now() - now}ms`;
                        this.logSrv.insert({message: logInter, ip, fkLocation: locationDoc._id} as IloggerInterceptor);
                        Logger.log(logInter, context.getClass().name);

                    },
                ),
            );
        }
    }

    private getClientIp(req) {
        return req.headers['X-Forwarded-For'] || req.connection.remoteAddress;
    }
}
