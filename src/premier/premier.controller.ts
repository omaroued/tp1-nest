import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get()
  getPremier() {
    return 'GET';
  }
  @Post()
  postPremier() {
    return 'POST';
  }
  @Delete()
  deletePremier() {
    return 'DELETE';
  }
  @Put()
  putPremier() {
    return 'PUT';
  }
  @Patch()
  patchPremier() {
    return 'PATCH';
  }
}
