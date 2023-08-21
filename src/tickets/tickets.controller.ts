import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.entity';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo ticket' })
  @ApiResponse({ status: 201, description: 'Ticket criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  create(@Body() ticket: Ticket) {
    return this.ticketsService.create(ticket);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os tickets' })
  @ApiResponse({ status: 200, description: 'Tickets listados' })
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar um ticket por ID' })
  @ApiResponse({ status: 200, description: 'Ticket listado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  @ApiResponse({ status: 404, description: 'Ticket não encontrado' })
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um ticket' })
  @ApiResponse({ status: 200, description: 'Ticket atualizado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  @ApiResponse({ status: 404, description: 'Ticket não encontrado' })
  update(@Param('id') id: string, @Body() ticket: Ticket) {
    return this.ticketsService.update(id, ticket);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um ticket' })
  @ApiResponse({ status: 200, description: 'Ticket deletado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  @ApiResponse({ status: 404, description: 'Ticket não encontrado' })
  remove(@Param('id') id: string) {
    return this.ticketsService.remove(id);
  }
}