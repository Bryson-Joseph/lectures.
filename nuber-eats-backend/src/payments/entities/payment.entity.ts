import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Entity, ManyToOne } from 'typeorm';

@InputType('PaymentInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Payment extends CoreEntity {
  @Field((type) => Int)
  @Column()
  transactionId: number;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => User.payments)
  user: User;

  @RelationId((payment:Payment) =>  payment.user)
  userId:number;

  @Field(type => Restaurant)
  @ManyToOne(type => Restaurant)
  restaurant: Restaurant;

  @RelationId((payment:Payment) => payment.restaurant)
  restaurantId:number:number
}
