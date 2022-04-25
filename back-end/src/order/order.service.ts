import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartService } from 'src/cart/cart.service';
import { OrderDetail } from 'src/order-detail/entities/order-detail.entity';
import { OrderDetailService } from 'src/order-detail/order-detail.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private cartService: CartService,
    private orderDetailService: OrderDetailService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const order = new Order();
    order.totalPrice = 0;
    order.createdDatetime = new Date();
    order.expireDatetime = new Date();
    order.address = createOrderDto.address;
    order.status = 'PENDING';

    const orderDetails = [];

    for (let i = 0; i < createOrderDto.cartIds.length; i++) {
      const cart = await this.cartService.find(createOrderDto.cartIds[i]);
      order.userId = cart.userId;
      order.totalPrice += cart.totalPrice;

      const orderDetail = new OrderDetail();
      orderDetail.catId = cart.catId;
      orderDetail.count = cart.count;
      orderDetail.prodId = cart.prodId;
      orderDetail.createdDatetime = new Date();

      orderDetails.push(orderDetail);
      await this.cartService.remove(cart.cartId);
    }
    const newOrder = await this.orderRepository.save(order);

    for (let i = 0; i < orderDetails.length; i++) {
      orderDetails[i].orderId = newOrder.orderId;
      await this.orderDetailService.create(orderDetails[i]);
    }
  }

  async findAll(userId: number): Promise<Order[]> {
    console.log(userId);
    return await this.orderRepository.find({ where: { userId: userId } });
  }
  async update(updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepository.findOne({
      where: { orderId: updateOrderDto.orderId },
    });
    order.status = updateOrderDto.status;
    return await this.orderRepository.save(order);
  }
}
