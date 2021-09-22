import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString, Length} from "class-validator";

export class CreatePostDto {
    @IsNumber({}, {message: 'Должен быть строкой'})
    readonly userId: number;

    @ApiProperty({example: 'user@email.ru', description: 'Email пользователя'})
    @IsString({message: 'Должен быть строкой'})
    readonly title: string;

    @ApiProperty({example: '123', description: 'Пароль пользователя'})
    @IsString({message: 'Должен быть строкой'})
    @Length(4, 250, {message: "Пароль не должен быть меньше 4 символов"})
    readonly content: string;
}