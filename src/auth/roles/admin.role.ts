
import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
    HttpStatus,
    HttpException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';

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
        console.log("user",user)
        if (err || !user || user.role!==1) {
            throw err || new HttpException({}, HttpStatus.UNAUTHORIZED);
            // return new HttpException({}, HttpStatus.FORBIDDEN);
            // return null;
        }

        if (!this.params) return;
        const id = this.params.id;
        if (!id) return new HttpException({}, HttpStatus.FORBIDDEN);
        // const promise: Promise<any> = this.userSrv.findById(id)
        // promise.then(user => {
        //     return new HttpException({}, HttpStatus.FORBIDDEN);
        // }).catch(e => {
        //     // throw new HttpException({ e }, HttpStatus.FORBIDDEN);
        //     return e;
        // });
        return user;
    }
}
