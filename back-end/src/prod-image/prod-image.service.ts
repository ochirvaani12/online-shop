import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdImage } from './entities/prod-image.entity';

@Injectable()
export class ProdImageService {
  constructor(
    @InjectRepository(ProdImage)
    private prodImageRepository: Repository<ProdImage>,
  ) {}

  async findAll(prodId: number): Promise<ProdImage[]> {
    return await this.prodImageRepository.find({ where: { prodId: prodId } });
  }
}
