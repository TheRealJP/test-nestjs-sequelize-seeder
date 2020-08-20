import {Module} from '@nestjs/common';
import {Song} from './models/Song';
import {SequelizeModule} from '@nestjs/sequelize';
import {Album} from './models/Album';
import {SeederModule} from 'nestjs-sequelize-seeder/dist';
import {SeedAlbum} from './seeders/SeedAlbum';
import {SeedSong} from './seeders/SeedSong';

@Module({
    imports: [
        SequelizeModule.forFeature([
            Album,
            Song,
        ]),
        SeederModule.forFeature([
            SeedAlbum,
            SeedSong,
        ]),
    ],
})
export class MusicModule {
}
