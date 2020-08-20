import {AutoIncrement, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table} from 'sequelize-typescript';
import {Song} from './Song';
import {Artist} from './Artist';

@Table
export class Album extends Model<Album> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column(DataType.DATE)
    releaseDate: Date;

    @HasMany(() => Song)
    songs: Song[];

    @ForeignKey(() => Artist)
    @Column
    artistId: number;
    @BelongsTo(() => Artist)
    artist: Artist;
}
