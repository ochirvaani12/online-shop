import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order-detail.entity';
import { OrderDetailService } from './order-detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetail])],
  controllers: [],
  providers: [OrderDetailService],
  exports: [OrderDetailService],
})
export class OrderDetailModule {}
