import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from 'src/roles/roles.service';
import { all } from 'sequelize/types/lib/operators';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService) { }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('USER');
        await user.$set('roles', [role.id])
        return user;
    }

    async getAllUser() {
        return await this.userRepository.findAll({ include: { all: true } })
    }
}
