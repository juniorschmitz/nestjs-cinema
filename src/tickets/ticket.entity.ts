import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';

export class Ticket {
  @ApiProperty({ description: 'ID do filme' })
  movieId: string;

  @ApiProperty({ description: 'ID do usuário' })
  userId: string;

  @ApiProperty({ description: 'Número do assento' })
  @IsNotEmpty({ message: 'Número do assento é mandatório' })
  @IsNumber()
  @Min(0, { message: 'Valor do assento deve ser maior ou igual a 0' })
  @Max(99, { message: 'Valor do assento deve ser menor ou igual a 100' })
  seatNumber: number;

  @ApiProperty({ description: 'Preço do ingresso' })
  @IsNotEmpty({ message: 'Preço do ingresso é mandatório' })
  @IsNumber()
  @Min(0, { message: 'Preço deve ser maior ou igual a 0' })
  @Max(60, { message: 'Preço deve ser menor ou igual a 60' })
  price: number;

  @ApiProperty({ description: 'Data de apresentação' })
  @IsNotEmpty({ message: 'Data de apresentação é mandatória'})
  showtime: Date;
}