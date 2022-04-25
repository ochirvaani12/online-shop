import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() createCartDto: CreateCartDto) {
    return await this.cartService.create(createCartDto);
  }

  @Get(':userId')
  async findAll(@Param('userId') userId: number) {
    return await this.cartService.findAll(userId);
  }

  @Patch()
  async update(@Body() updateCartDto: UpdateCartDto) {
    return await this.cartService.update(updateCartDto);
  }

  @Delete(':cartId')
  async remove(@Param('cartId') cartId: number) {
    return await this.cartService.remove(cartId);
  }
}
