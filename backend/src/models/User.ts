import { ID, Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field((_type) => ID)
  id: string;

  @Field()
  name: string;
}
