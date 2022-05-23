import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  // Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {} //service 가 생기면서 구조체

  @Get()
  getAll(): Movie[] {
    // return `movie all select!!!`;
    return this.moviesService.getAll();
  }

  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `We ar searcing for a movie made after:${searchingYear}`;
  // }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    // return `this will return one movie id :${movieId}`;
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    // console.log(movieData);
    // return movieData;
    return this.moviesService.create(movieData);
  }

  @Delete(`/:id`)
  remove(@Param('id') movieId: number) {
    // return `This will delete a movie id : ${movieId}`;
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    // return {
    //   updatedMovie: movieId,
    //   updateData,
    // };
    return this.moviesService.update(movieId, updateData);
  }
}
