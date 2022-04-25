import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VwProduct } from './entities/vwproduct.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VwProduct])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
