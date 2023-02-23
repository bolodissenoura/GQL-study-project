import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Surgery {
  @Field((_type) => ID)
  id: string;

  @Field()
  patient: string;

  @Field()
  doctor: string;

  @Field()
  date: string;

  @Field()
  hour: string;

  @Field()
  instrumentator: string;

  @Field()
  startingPoint: string;

  @Field()
  hospitalName: string;

  @Field()
  typeTag: string;
}
