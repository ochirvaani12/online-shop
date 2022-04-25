import { Controller, Get, Param } from '@nestjs/common';
import { ProdImageService } from './prod-image.service';

@Controller('prod-image')
export class ProdImageController {
  constructor(private readonly prodImageService: ProdImageService) {}

  @Get(':prodId')
  async findAll(@Param('prodId') prodId: number) {
    return await this.prodImageService.findAll(prodId);
  }
}
