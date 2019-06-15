import {CallHandler, ExecutionContext, HttpService, Injectable, Logger, NestInterceptor} from '@nestjs/common';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LocationService} from '../shared/location/location.service';
import {IloggerInterceptor} from './intefaces/logInterseptor.interface';
import {LoggerService} from './logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    constructor(private logSrv: LoggerService, private locationSrv: LocationService, private readonly httpService: HttpService) {
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
                        Logger.log(logInter, context.getClass().name);
                        await this.logSrv.insert({
                            message: logInter,
                            userAgent: this.getUserAgent(req),
                            ip,
                            fkLocation: locationDoc._id,
                        } as IloggerInterceptor);

                    },
                ),
            );
        }
    }

    private getClientIp(req) {
        return req.headers['X-Forwarded-For'] || req.connection.remoteAddress;
    }

    private getUserAgent(req) {
        return req.headers['user-agent'];
    }
}
