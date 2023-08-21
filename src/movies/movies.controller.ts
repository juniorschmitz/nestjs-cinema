import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { Movie } from './movie.entity';
import { MoviesService } from './movies.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos filmes' })
  @ApiResponse({ status: 200, description: 'Filmes listados com sucesso' })
  async findAll(): Promise<Movie[]> {
    return await this.moviesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista um filme' })
  @ApiResponse({ status: 200, description: 'Filme listado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  @ApiResponse({ status: 404, description: 'Filme não encontrado.' })
  async findOne(@Param('id') id: string): Promise<Movie> {
    const movie = await this.moviesService.findOne(id);
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um filme' })
  @ApiResponse({ status: 201, description: 'Filme atualizado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  @ApiResponse({ status: 404, description: 'Filme não encontrado.' })
  async update(@Param('id') id: string, @Body() movie: Partial<Movie>): Promise<Movie> {
    const updatedMovie = await this.moviesService.update(id, movie);
    if (!updatedMovie) {
      throw new NotFoundException('Movie not found or not updated');
    }
    return updatedMovie;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um filme' })
  @ApiResponse({ status: 201, description: 'Filme excluído com sucesso.' })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  @ApiResponse({ status: 404, description: 'Filme não encontrado.' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.moviesService.delete(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo filme' })
  @ApiResponse({ status: 201, description: 'Filme criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  create(@Body() movie: Movie): void {
    this.moviesService.create(movie);
  }
}
