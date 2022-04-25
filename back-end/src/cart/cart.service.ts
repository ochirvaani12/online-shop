import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private cartRepository: Repository<Cart>,
  ) {}

  async create(createCartDto: CreateCartDto) {
    const cart = this.cartRepository.create(createCartDto);
    return await this.cartRepository.save(cart);
  }

  async find(cartId: number): Promise<Cart> {
    return await this.cartRepository.findOne({ where: { cartId: cartId } });
  }

  async findAll(userId: number): Promise<Cart[]> {
    return await this.cartRepository.find({ where: { userId: userId } });
  }

  async update(updateCartDto: UpdateCartDto) {
    const cart = this.cartRepository.create(updateCartDto);
    return await this.cartRepository.save(cart);
  }

  async remove(cartId: number) {
    const cart = await this.cartRepository.findOne({
      where: { cartId: cartId },
    });
    return await this.cartRepository.remove(cart);
  }
}
