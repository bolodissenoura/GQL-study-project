import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../models/User";
import crypto, { randomBytes } from "crypto";
import { UserMongo } from "../mongodb/models/User";

@Resolver()
export class UserResolver {
  private data: User[] = [];
  @Query(() => [User])
  async users() {
    return await UserMongo.find();
  }

  @Mutation(() => User)
  async createUser(@Arg("name") name: string) {
    const user = { id: crypto.randomUUID(), name };

    this.data.push(user);

    return await UserMongo.create({
      user,
    });
  }
}
