import {AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table} from 'sequelize-typescript';
import {Album} from './Album';

@Table
export class Song extends Model<Song> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    timesPlayed: number;

    @Column
    length: number;

    @Column
    genre: string;

    @ForeignKey(() => Album)
    @Column
    albumId: number;
    @BelongsTo(() => Album)
    album: Album;
}
