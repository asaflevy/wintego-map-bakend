import {Model} from 'mongoose';
import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {IUser, IUsersService} from './user.interface';
import {CreateUserDto} from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import {LoginUserDto} from './dto/login-user.dto';

@Injectable()
export class UsersService implements IUsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
    }

    public async login(credentials: LoginUserDto): Promise<IUser> {
        const user = await this.findByEmail(credentials.email);
        const match = await this.compareHash(credentials.password, user.password);
        if (!user || !match) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async findByEmail(email: string): Promise<IUser> {
        return await this.userModel.findOne({email});
    }

    async findById(id: number): Promise<IUser> {
        return await this.userModel.findOne({
            where: {id},
        });
    }

    async create(createUserDto: CreateUserDto): Promise<IUser> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async delete(ID: number): Promise<string> {
        try {
            await this.userModel.findByIdAndRemove(ID).exec();
            return 'The user has been deleted';
        } catch (err) {
            return 'The user could not be deleted';
        }
    }

    async findAll(): Promise<IUser[]> {
        return await this.userModel.find().exec();
    }

    async findOne(options: object): Promise<IUser> {
        return await this.userModel.findOne(options).exec();
    }

    async update(ID: number, newValue: IUser): Promise<IUser> {
        const user = await this.userModel.findById(ID).exec();

        if (!user._id) {
        }

        await this.userModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.userModel.findById(ID).exec();
    }

    private async compareHash(password: string | undefined, hash: string | undefined): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

}
