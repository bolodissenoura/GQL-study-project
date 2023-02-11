import { Field, InputType } from "type-graphql";

@InputType()
export class CreateClientInput {
  @Field()
  name: string;

  @Field()
  urlFotoPerfil: string;

  @Field()
  celular: string;
}
