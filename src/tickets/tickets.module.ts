import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { DbService } from '../db/db.service';

@Module({
  providers: [TicketsService, DbService],
  controllers: [TicketsController]
})
export class TicketsModule {}
