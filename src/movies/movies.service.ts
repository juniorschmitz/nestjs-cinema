import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './movie.entity';
import { DbService } from '../db/db.service';

@Injectable()
export class MoviesService {
  constructor(private readonly dbService: DbService) {}

  findAll(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      this.dbService.getMovieDatastore().find({}, (err, docs) => {
        if (err) reject(err);
        else resolve(docs);
      });
    });
  }

  findByTitle(title: string): Promise<Movie | null> {
    return new Promise((resolve, reject) => {
      this.dbService.getMovieDatastore().findOne({ title: title }, (err, doc) => {
        if (err) reject(err);
        else resolve(doc);
      });
    });
  }

  create(movie: Movie): Promise<Movie> {
    return new Promise((resolve, reject) => {
      this.dbService.getMovieDatastore().insert(movie, (err, newDoc) => {
        if (err) reject(err);
        else resolve(newDoc);
      });
    });
  }

  findOne(id: string): Promise<Movie> {
    return new Promise((resolve, reject) => {
      this.dbService.getMovieDatastore().findOne({ _id: id }, (err, doc) => {
        if (err) reject(err);
        else if (!doc) reject(new NotFoundException('Movie not found'));
        else resolve(doc);
      });
    });
  }

  update(id: string, movie: Partial<Movie>): Promise<Movie> {
    return new Promise((resolve, reject) => {
      this.dbService.getMovieDatastore().update({ _id: id }, { $set: movie }, {}, (err, numReplaced) => {
        if (err) reject(err);
        else if (numReplaced === 0) reject(new NotFoundException('Movie not found or not updated'));
        else this.findOne(id).then(resolve).catch(reject);
      });
    });
  }

  delete(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dbService.getMovieDatastore().remove({ _id: id }, {}, (err, numRemoved) => {
        if (err) reject(err);
        else if (numRemoved === 0) reject(new NotFoundException('Movie not found'));
        else resolve();
      });
    });
  }
}
