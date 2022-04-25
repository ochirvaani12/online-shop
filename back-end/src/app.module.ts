import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { OrderModule } from './order/order.module';
import { ProdImageModule } from './prod-image/prod-image.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({}),
    UsersModule,
    LoginModule,
    ProductModule,
    AuthModule,
    CategoryModule,
    CartModule,
    OrderDetailModule,
    OrderModule,
    ProdImageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
