import { Field, InputType } from "type-graphql";

@InputType()
export class CreateClientInput {
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
