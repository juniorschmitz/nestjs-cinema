import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { TicketsModule } from './tickets/tickets.module';
import { DbService } from './db/db.service';

@Module({
  imports: [MoviesModule, TicketsModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
