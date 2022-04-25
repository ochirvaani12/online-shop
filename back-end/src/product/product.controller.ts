import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/all')
  async findAll() {
    return await this.productService.findAll();
  }

  @Get('/cat/:catId')
  async findAllWithCat(@Param('catId') catId: number) {
    return await this.productService.findAllWithCat(catId);
  }

  @Get(':prodId')
  async findOne(@Param('prodId') prodId: number) {
    return await this.productService.findOne(prodId);
  }
}
