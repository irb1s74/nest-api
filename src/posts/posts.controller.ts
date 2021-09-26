import {Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseGuards, UseInterceptors} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PostsService} from "./posts.service";
import {CreatePostDto} from "./dto/create-post.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@ApiTags('Посты')
@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @ApiOperation({summary: 'Создание постов'})
    @ApiResponse({status: 200})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() postDto: CreatePostDto, @UploadedFile() image) {
        return this.postsService.create(postDto, image);
    }

}
