import { Field, InputType, ID } from "type-graphql";

@InputType()
export class CreateSurgeryInput {
  @Field()
  patient: string;

  @Field()
  doctor: string;

  @Field()
  distance: number;

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

@InputType()
export class EditSurgeryInput {
  @Field((_type) => ID)
  id: string;

  @Field()
  patient: string;

  @Field()
  doctor: string;

  @Field()
  distance: number;

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
