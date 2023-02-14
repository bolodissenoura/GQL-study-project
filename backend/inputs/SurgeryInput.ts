import { Field, InputType, ID } from "type-graphql";

@InputType()
export class CreateSurgeryInput {
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

@InputType()
export class EditSurgeryInput {
  @Field((_type) => ID)
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
