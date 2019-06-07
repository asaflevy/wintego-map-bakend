import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    Logger, CallHandler, LoggerService,
} from '@nestjs/common';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LogInterseptorService} from './logInterseptor.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    constructor(private logSrv: LogInterseptorService) {
    }

    intercept(context: ExecutionContext, call$: CallHandler): Observable<any> {
        const now = Date.now();
        const req = context.switchToHttp().getRequest();
        if (req) {
            const method = req.method;
            const url = req.url;

            return call$.handle().pipe(
                tap(() => {
                        const logInter = `Interceptor ${method} ${url} ${Date.now() - now}ms`;
                        Logger.log(logInter, context.getClass().name);
                        this.logSrv.insert({message: logInter});
                    },
                ),
            );
        }
    }
}
