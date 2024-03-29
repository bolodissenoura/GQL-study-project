import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { CreateSurgeryInput, EditSurgeryInput } from "../inputs/SurgeryInput";
import { Surgery } from "../models/Surgery";
import { SurgeryMongo } from "../mongodb/models/Surgery";

@Resolver()
export class SurgeryResolver {
  @Query(() => [Surgery])
  @Authorized()
  async Surgeries() {
    return await SurgeryMongo.find();
  }

  @Query(() => Surgery)
  async Surgery(@Arg("id") id: string) {
    return await SurgeryMongo.findOne({ _id: id });
  }

  @Mutation(() => Surgery)
  @Authorized()
  async createSurgery(
    @Arg("createSurgeryObject") createSurgeryObject: CreateSurgeryInput
  ) {
    const {
      date,
      hour,
      patient,
      instrumentator,
      doctor,
      startingPoint,
      hospitalName,
      typeTag,
    } = createSurgeryObject;

    return await SurgeryMongo.create({
      date,
      hour,
      patient,
      instrumentator,
      doctor,
      startingPoint,
      hospitalName,
      typeTag,
    });
  }

  @Mutation(() => Surgery)
  @Authorized()
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

  @Mutation(() => String)
  @Authorized()
  async deleteSurgery(@Arg("id") id: string) {
    await SurgeryMongo.deleteOne({ _id: id });
    return `User ${id} successfully deleted`;
  }
}
