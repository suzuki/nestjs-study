import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Post, UseFilters } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
//import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService,
  ) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    try {
      return this.catsService.findAll();
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error,
      });
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return `This action returns a #${id} cat`;
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   console.log(updateCatDto);
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete(':id')
  // delete(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}
