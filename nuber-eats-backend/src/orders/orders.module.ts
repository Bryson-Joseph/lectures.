import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './orders.service';
import { OrderResolver } from './orders.resolver';
import { Order } from './entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [OrderService, OrderResolver],
})
export class OrdersModule {}
