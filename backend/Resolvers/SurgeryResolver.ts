import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateSurgeryInput, EditSurgeryInput } from "../inputs/SurgeryInput";
import { Surgery } from "../models/Surgery";
import { SurgeryMongo } from "../mongodb/models/Surgery";

@Resolver()
export class SurgeryResolver {
  @Query(() => [Surgery])
  async Surgeries() {
    return await SurgeryMongo.find();
  }

  @Query(() => Surgery)
  async Surgery(@Arg("id") id: string) {
    return await SurgeryMongo.findOne({ _id: id });
  }

  @Mutation(() => Surgery)
  async createSurgery(
    @Arg("createSurgeryObject") createSurgeryObject: CreateSurgeryInput
  ) {
    const { date, distance, doctor, hospital, patient, tipo } =
      createSurgeryObject;

    return await SurgeryMongo.create({
      date,
      distance,
      doctor,
      hospital,
      patient,
      tipo,
    });
  }

  @Mutation(() => Surgery)
  async editSurgery(
    @Arg("editSurgeryObject") editSurgeryObject: EditSurgeryInput
  ) {
    const surgery = { ...editSurgeryObject };

    await SurgeryMongo.updateOne(
      {
        _id: surgery.id,
      },
      surgery
    );

    return surgery;
  }
}
