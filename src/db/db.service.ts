import { Injectable, OnModuleInit } from '@nestjs/common';
import * as Datastore from 'nedb';

@Injectable()
export class DbService implements OnModuleInit {
  private movies: Datastore;
  private tickets: Datastore;

  onModuleInit() {
    this.movies = new Datastore({ filename: './movies.db', autoload: true });
    this.tickets = new Datastore({ filename: './tickets.db', autoload: true });
  }

  getMovieDatastore() {
    return this.movies;
  }

  getTicketDatastore() {
    return this.tickets;
  }
}