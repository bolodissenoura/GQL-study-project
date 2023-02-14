import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Client {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  cpf: string;

  @Field()
  adress: string;

  @Field()
  tel: string;
}
