import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {CreatePostDto} from "./dto/create-post.dto";
import {FilesService} from "../files/files.service";

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postsRepository: typeof Post,
                private filesSerive: FilesService) {
    }

    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.filesSerive.createFile(image);
        return await this.postsRepository.create({...dto, image: fileName})
    }
}
