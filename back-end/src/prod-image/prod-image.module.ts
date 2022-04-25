import { Module } from '@nestjs/common';
import { ProdImageService } from './prod-image.service';
import { ProdImageController } from './prod-image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdImage } from './entities/prod-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProdImage])],
  controllers: [ProdImageController],
  providers: [ProdImageService],
})
export class ProdImageModule {}
