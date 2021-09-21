import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
import { CreateRoleDto } from "./dto/create-role.dto";
import { RolesService } from "./roles.service";

@ApiTags('Роли')
@Controller('roles')
export class RolesController {

    constructor(private rolesService: RolesService) { }

    @ApiOperation({ summary: 'Создание роли' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    create(@Body() rolesDto: CreateRoleDto) {
        return this.rolesService.CreateRoles(rolesDto);
    }

    @ApiOperation({ summary: 'Получение ролей' })
    @ApiResponse({ status: 200, type: [User] })
    @Get('/:value')
    find(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value);
    }
}
