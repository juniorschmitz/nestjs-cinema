import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { TicketsModule } from './tickets/tickets.module';
import { DBModule } from './db/db.module';
// import { DbService } from './db/db.service';

@Module({
  imports: [MoviesModule, TicketsModule, DBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
