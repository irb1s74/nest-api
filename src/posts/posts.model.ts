import {Column, Table, DataType, Model, BelongsTo, ForeignKey} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {

    @ApiProperty({example: '1', description: 'Индификатор пользователя'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@email.ru', description: 'Email пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: '123', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @Column({type: DataType.STRING, allowNull: false})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: string;

    @BelongsTo(() => User)
    author: string;

}