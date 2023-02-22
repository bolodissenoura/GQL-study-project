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
  tipo: string;

  @Field()
  distance: number;

  @Field()
  date: string;

  @Field()
  hour: string;

  @Field()
  instrumentator: string;

  @Field((type) => String)
  startingPoint: {
    title: string;
    fullAdress: string;
  };

  @Field((type) => String)
  hospital: {
    title: string;
    fullAdress: string;
  };

  @Field()
  typeTag: string;

  @Field((type) => String)
  toll: {
    totalTolls: number;
    totalTollsPrice: number;
  };
}
