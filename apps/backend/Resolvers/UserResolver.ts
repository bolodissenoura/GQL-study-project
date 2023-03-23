import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserInput } from "../inputs/UserInput";
import { User } from "../models/User";
import { UserMongo } from "../mongodb/models/User";
import { hash } from "bcryptjs";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async Users() {
    return await UserMongo.find().select(["_id", "name", "email"]);
  }

  @Query(() => User)
  async User(@Arg("id") id: string) {
    return await UserMongo.findOne({ _id: id });
  }

  @Mutation(() => User)
  async createUser(@Arg("createUserObject") createUserObject: CreateUserInput) {
    const { name, password, email } = createUserObject;
    const hashedPassowrd = await hash(password, 8);

    return await UserMongo.create({
      name,
      password: hashedPassowrd,
      email,
    });
  }
}
