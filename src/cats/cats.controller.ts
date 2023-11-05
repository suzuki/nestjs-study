import { Body, Controller, Get, HttpException, HttpStatus, Logger, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  private readonly logger = new Logger(CatsController.name);

  constructor(
    private catsService: CatsService,
  ) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll() {
    try {
      return {
        data: this.catsService.findAll(),
      };
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error,
      });
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    this.logger.log(`findOne: ${id}`);

    return this.catsService.findOne(id);
  }

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
