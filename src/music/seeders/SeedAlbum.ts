import {OnSeederInit, Seeder} from 'nestjs-sequelize-seeder/dist';
import {Album} from '../models/Album';
import {User} from '../../users/models/User';

@Seeder({
    model: Album,
    unique: [],
})
export class SeedAlbum implements OnSeederInit {
    run() {
        return [
            {
                name: 'Start Today',
                releaseDate: new Date(1989, 1, 1),
                artistId: 1,
            },
            {
                name: 'Reign In Blood',
                releaseDate: new Date(1986, 10, 7),
                artistId: 1,
            },
            {
                name: 'Let Mortal Heroes Sing Your Fame',
                releaseDate: new Date(2001, 10, 31),
                artistId: 3,
            },
        ] as Album[];
    }
}
