import { Field, ObjectType } from "type-graphql";
import { UserInterface } from "../mongodb/models/User";
import { User } from "./User";

interface AuthInterface {
  token: string;
  user: UserInterface;
}

@ObjectType()
class Auth implements AuthInterface {
  @Field({ nullable: false })
  token: string;

  @Field((_type) => User, { nullable: false })
  user: User;
}

export default Auth;
