import { Controller, Get, Req, Request} from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'this will eventually return a car collection';
  }
}
