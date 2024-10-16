import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { createRestaurantDto } from './dtos/create-restaurant.dto';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    if (veganOnly) {
      return [];
    }
  }
  @Mutation(() => Boolean)
  createRestaurant(@Args() createRestaurantDto: createRestaurantDto): boolean {
    console.log(createRestaurantDto);
    return true;
  }
}
