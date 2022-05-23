import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {

    constructor(
        private gitHubService: GithubService
    ) {}

    @Get('')
    getRepos() {
        return "Prueba de Modulo GIT";
    }

    @Get('/repos')
    async getReposByUsername( @Param('username') username: string) {
        let data = await this.gitHubService.getReposByUsername(username)
        return data.data;
    }

}
