import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@email.ru', description: 'Email пользователя'})
    @IsString({message: 'Должен быть строкой'})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;

    @ApiProperty({example: 'User', description: 'Имя пользователя'})
    @IsString({message: 'Должен быть строкой'})
    readonly name: string;

    @ApiProperty({example: 'Surname', description: 'Фамилия пользователя'})
    @IsString({message: 'Должен быть строкой'})
    readonly surname: string;

    @ApiProperty({example: '123', description: 'Пароль пользователя'})
    @IsString({message: 'Должен быть строкой'})
    @Length(4, 16, {message: "Пароль не должен быть меньше 4 символов"})
    readonly password: string;
}