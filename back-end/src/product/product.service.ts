import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VwProduct } from './entities/vwproduct.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(VwProduct)
    private vwProductRepository: Repository<VwProduct>,
  ) {}

  async findAll(): Promise<VwProduct[]> {
    return await this.vwProductRepository.find({
      order: { createdDatetime: 'DESC' },
    });
  }

  async findAllWithCat(catId: number): Promise<VwProduct[]> {
    return await this.vwProductRepository.find({
      where: { catId: catId },
      order: { createdDatetime: 'DESC' },
    });
  }

  async findOne(prodId: number): Promise<VwProduct> {
    return await this.vwProductRepository.findOne({
      where: { prodId: prodId },
    });
  }
}
