import {PassportLocalDocument} from 'mongoose';
import {IUser} from './user.interface';
import {ILocation} from '../../shared/location/intefaces/location.interface';
import {AddLocationDto} from '../dto/add-location.dto';

export interface IUser extends PassportLocalDocument {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly role: UserType;
    readonly fkLocation: [];

}

export interface IUsersService {
    findAll(): Promise<IUser[]>;

    findById(ide: string): Promise<IUser | null>;

    findByEmail(email: string): Promise<IUser | null>;

    findOne(options: object): Promise<IUser | null>;

    create(user: IUser): Promise<IUser>;

    addLocation(locationDto: AddLocationDto): Promise<IUser>;

    update(id: number, newValue: IUser): Promise<IUser | null>;

    delete(id: number): Promise<string>;
}

export enum UserType {
    User = 0,
    Admin = 1,
}
