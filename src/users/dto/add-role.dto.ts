import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: '1', description: 'id пользователя'})
    readonly userId: number;

    @ApiProperty({example: 'User', description: 'Роль пользователя'})
    readonly value: string;
}