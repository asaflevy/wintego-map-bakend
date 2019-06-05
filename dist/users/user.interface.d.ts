/// <reference types="passport-local-mongoose" />
import { PassportLocalDocument } from 'mongoose';
import { IUser } from './user.interface';
export interface IUser extends PassportLocalDocument {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
}
export interface IUsersService {
    findAll(): Promise<IUser[]>;
    findById(ID: number): Promise<IUser | null>;
    findByEmail(email: string): Promise<IUser | null>;
    findOne(options: object): Promise<IUser | null>;
    create(user: IUser): Promise<IUser>;
    update(ID: number, newValue: IUser): Promise<IUser | null>;
    delete(ID: number): Promise<string>;
}
