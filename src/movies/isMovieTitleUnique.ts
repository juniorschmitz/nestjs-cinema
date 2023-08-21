import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { MoviesService } from './movies.service';

@ValidatorConstraint({ async: true })
@Injectable() // Important to make it a NestJS Injectable
export class IsMovieTitleUnique implements ValidatorConstraintInterface {
  constructor(private readonly moviesService: MoviesService) {}

  async validate(title: string) {
    const movie = await this.moviesService.findByTitle(title);
    return !movie; // return true if validation passes
  }

  defaultMessage(args: ValidationArguments) {
    return 'Movie title is already in use';
  }
}

export function IsUniqueTitle(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsMovieTitleUnique,
    });
  };
}