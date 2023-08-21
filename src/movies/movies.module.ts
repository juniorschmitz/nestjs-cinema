import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { DbService } from '../db/db.service';
import { IsMovieTitleUnique } from './isMovieTitleUnique';

@Module({
  providers: [MoviesService, DbService, IsMovieTitleUnique],
  controllers: [MoviesController]
})
export class MoviesModule {}
