import { Field, InputType } from "type-graphql";

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
