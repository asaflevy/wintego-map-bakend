/// <reference types="passport-local-mongoose" />
import { PassportLocalDocument } from 'mongoose';
import { IUser } from './user.interface';
import { AddLocationDto } from '../dto/add-location.dto';
export interface IUser extends PassportLocalDocument {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
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
