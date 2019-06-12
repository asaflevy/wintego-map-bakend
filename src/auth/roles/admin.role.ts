import {ExecutionContext, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {UsersService} from '../../users/users.service';

@Injectable()
export class AdminRoleGuard extends AuthGuard('jwt') {

    body = '';
    params: any = {};

    constructor(private userSrv: UsersService) {
        super();
    }

    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        this.body = request.body;
        this.params = request.params;
        return super.canActivate(context);
    }

    handleRequest(err, user, info) {

        if (err || !user || user.role !== 1) {
            throw err || new HttpException({}, HttpStatus.UNAUTHORIZED);
        }

        if (!this.params) {
            return;
        }
        const id = this.params.id;
        if (!id) {
            return new HttpException({}, HttpStatus.FORBIDDEN);
        }
        return user;
    }
}
