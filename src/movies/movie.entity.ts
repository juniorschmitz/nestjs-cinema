import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsUniqueTitle } from './isMovieTitleUnique';

export class Movie {
  @ApiProperty({ description: 'ID do filme' })
  id: number;

  @ApiProperty({ description: 'Título do filme' })
  @IsNotEmpty()
  @IsString()
  @IsUniqueTitle()
  title: string;

  @ApiProperty({ description: 'Descrição do filme' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'Data de lançamento do filme' })
  launchdate: Date;

  @ApiProperty({ description: 'Datas em que o filme será apresentado' })
  showtimes: Date[];
}