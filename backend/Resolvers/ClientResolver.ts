import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateClientInput } from "../inputs/ClientInput";
import { Client } from "../models/Client";
import { ClientMongo } from "../mongodb/models/Client";

@Resolver()
export class ClientResolver {
  @Query(() => [Client])
  async clients() {
    return await ClientMongo.find();
  }

  @Query(() => Client)
  async client(@Arg("id") id: string) {
    return await ClientMongo.findOne({ _id: id });
  }

  @Mutation(() => Client)
  async createClient(
    @Arg("createClientObject") createClientObject: CreateClientInput
  ) {
    const { name, adress, cpf, email, tel } = createClientObject;

    return await ClientMongo.create({
      name,
      adress,
      cpf,
      email,
      tel,
    });
  }
}
