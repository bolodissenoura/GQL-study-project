import { Field, InputType, ID } from "type-graphql";

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  email: string;
}
