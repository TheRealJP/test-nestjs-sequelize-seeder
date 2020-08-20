import {OnSeederInit, Seeder} from 'nestjs-sequelize-seeder/dist';
import {Song} from '../models/Song';

@Seeder({ model: Song })
export class SeedSong implements OnSeederInit {
    run() : Song[]{
        return [
            {
                timesPlayed: 123,
                name: 'Song 1',
                length: 96,
                albumId: 1,
                genre: 'Country',
            },
            {
                timesPlayed: 434,
                name: 'Song 2',
                length: 124,
                albumId: 1,
                genre: 'Rock',
            },
            {
                timesPlayed: 10,
                name: 'Song 3',
                length: 248,
                albumId: 3,
                genre: 'Hip hop',
            },
        ] as Song[];
    }
}


