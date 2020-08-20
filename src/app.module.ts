import { Module } from '@nestjs/common';
import { SeederModule } from 'nestjs-sequelize-seeder/dist';
import { SequelizeModule } from '@nestjs/sequelize';
import { MusicModule } from './music/music.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'music',
      logging: true, // put this one true if you want to see what sql commands sequelize is executing in the logs
      autoLoadModels: true,
      synchronize: true,
      sync: {
        force: true,
      },
    }),
    SeederModule.forRoot({
      isGlobal: true,
      logging: true,
      connection: 'postgres',
      enableAutoId: true,
      autoIdFieldName: 'id',
      foreignDelay: 5000,
    }),
    MusicModule,
  ],
})
export class AppModule {}
