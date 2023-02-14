import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Surgery {
  @Field((type) => ID)
  id: string;

  @Field()
  patient: string;

  @Field()
  doctor: string;

  @Field()
  hospital: string;

  @Field()
  tipo: string;

  @Field()
  distance: number;

  @Field()
  date: string;
}
