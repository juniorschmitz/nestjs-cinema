import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class Movie {
  @ApiProperty({ description: 'Título do filme' })
  @IsNotEmpty({ message: 'Título do filme é mandatório' })
  @IsString({ message: 'Título deve ser do tipo String' })
  title: string;

  @ApiProperty({ description: 'Descrição do filme' })
  @IsNotEmpty({ message: 'Descrição do filme é mandatória' })
  @IsString({ message: 'Descrição deve ser do tipo String' })
  description: string;

  @ApiProperty({ description: 'Data de lançamento do filme' })
  @IsNotEmpty({ message: 'Data de lançamento é mandatória' })
  launchdate: Date;

  @ApiProperty({ description: 'Datas em que o filme será apresentado' })
  @IsNotEmpty()
  showtimes: Date[];
}