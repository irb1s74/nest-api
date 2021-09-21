import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({example: '1', description: 'id пользователя'})
    readonly userId: number;

    @ApiProperty({example: 'Хулиган', description: 'Причина бана'})
    readonly banReason: string;
}