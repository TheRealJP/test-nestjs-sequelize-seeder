import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Song } from './Song';

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
}
