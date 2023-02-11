import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Client {
  @Field((_type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  urlFotoPerfil: string;
  @Field()
  celular: string;
}
