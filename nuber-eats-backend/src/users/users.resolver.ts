import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './users.service';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dtos/create-account.dto';
import { LoginOutput, LoginInput } from './dtos/login.dtos';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly usersService: UserService) {}

  @Query((returns) => Boolean)
  hi() {
    return true;
  }

  @Mutation((returns) => CreateAccountOutput)
  async createAccount(
    @Args('input') CreateAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    try {
      return this.usersService.createAccount(CreateAccountInput);
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  }
  @Mutation((returns) => LoginOutput)
  async login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    try {
      return this.usersService.login(loginInput);
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
