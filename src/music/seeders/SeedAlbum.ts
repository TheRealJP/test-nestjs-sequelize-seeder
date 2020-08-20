import {OnSeederInit, Seeder} from 'nestjs-sequelize-seeder/dist';
import {Album} from '../models/Album';

@Seeder({ model: Album })
export class SeedAlbum implements OnSeederInit {
    run(): Album[] {
        return [
            {
                name: 'Album 1',
                releaseDate: new Date(1989, 1, 1),
            },
            {
                name: 'Album 2',
                releaseDate: new Date(1986, 10, 7),
            },
            {
                name: 'Album 3',
                releaseDate: new Date(2001, 10, 31),
            },
        ] as Album[];
    }
}
