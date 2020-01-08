import { Controller, Get, Req, Request} from '@nestjs/common';

@Controller('cars')
export class CarsController {
  @Get()
  findAll(@Req() request: Request): {} {
    return [{make: 'honda', model: 'accord'},
            {make: 'subaru', model: 'outback'},
            {make: 'fiat', model: '123 spider'}];
  }

  @Get(':id')
  findOne(@Req() request: Request): {} {
    return {make: 'tesla', model: 'model x'}
  }
}
