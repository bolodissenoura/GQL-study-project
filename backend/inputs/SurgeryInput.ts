import { Field, InputType, ID } from "type-graphql";
type Point = {
  title: string;
  fullAdress: string;
};
type Toll = {
  totalTolls: number;
  totalTollsPrice: number;
};
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

  @Field((_type) => [String])
  startingPoint: Point[];

  @Field((_type) => [String])
  hospital: Point[];

  @Field()
  typeTag: string;

  @Field((_type) => [String])
  toll: Toll[];
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

  @Field((_type) => [String])
  startingPoint: Point[];

  @Field((_type) => [String])
  hospital: Point[];

  @Field()
  typeTag: string;

  @Field((_type) => [String])
  toll: Toll[];
}
