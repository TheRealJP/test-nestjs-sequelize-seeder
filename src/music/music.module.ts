import {Module} from '@nestjs/common';
import {SongService} from './services/song/song.service';
import {SongController} from './controllers/song/song.controller';
import {Song} from './models/Song';
import {SequelizeModule} from '@nestjs/sequelize';
import {Album} from './models/Album';
import {Artist} from './models/Artist';
import {SeederModule} from 'nestjs-sequelize-seeder/dist';
import {SeedArtist} from './seeders/SeedArtist';
import {SeedAlbum} from './seeders/SeedAlbum';
import {SeedSong} from './seeders/SeedSong';
import {AlbumService} from './services/album/album.service';

@Module({
    imports: [
        SequelizeModule.forFeature([
            Artist,
            Album,
            Song,
        ]),
        SeederModule.forFeature([
            SeedArtist,
            SeedAlbum,
            SeedSong,
        ]),
    ],
    controllers: [
        SongController,
    ],
    providers: [
        SongService,
        AlbumService,
    ],
})
export class MusicModule {
}
