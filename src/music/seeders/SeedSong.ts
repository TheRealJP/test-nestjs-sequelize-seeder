import {OnSeederInit, Seeder} from 'nestjs-sequelize-seeder/dist';
import {Song} from '../models/Song';

@Seeder({
    model: Song,
    unique: [],
})
export class SeedSong implements OnSeederInit {
    run() {
        return [
            {
                timesPlayed: 4547,
                name: 'Cats & Dogs',
                length: 96,
                albumId: 1,
                genre: 'Hardcore Punk',
            },
            {
                timesPlayed: 3474,
                name: 'Start Today',
                length: 124,
                albumId: 1,
                genre: 'Hardcore Punk',
            },
            {
                timesPlayed: 666,
                name: 'A New Power\'s Rising',
                length: 248,
                albumId: 3,
                genre: 'Epic',
            },
        ] as Song[];
    }
}


