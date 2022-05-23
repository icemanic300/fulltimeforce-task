import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {

    async getReposByUsername(username: string) {
        return await axios({
            method: 'get',
            url: 'https://api.github.com/users/icemanic300/repos',
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
    }

}
