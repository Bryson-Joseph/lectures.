import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => String)
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Boolean, { nullable: true })
  isGood?: boolean;
}
