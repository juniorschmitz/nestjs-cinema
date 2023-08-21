import { ApiProperty } from '@nestjs/swagger';

export class Ticket {
  @ApiProperty({ description: 'ID do ticket' })
  id: number;

  @ApiProperty({ description: 'ID do filme' })
  movieId: number;

  @ApiProperty({ description: 'ID do usuário' })
  userId: number;

  @ApiProperty({ description: 'Número do assento' })
  seatNumber: number;

  @ApiProperty({ description: 'Preço do ingresso' })
  price: number;

  @ApiProperty({ description: 'Data de apresentação' })
  showtime: Date;
}