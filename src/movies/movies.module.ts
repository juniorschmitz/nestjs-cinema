import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { DBModule } from '../db/db.module';

@Module({
  imports: [DBModule],
  providers: [MoviesService],
  controllers: [MoviesController]
})
export class MoviesModule {}
