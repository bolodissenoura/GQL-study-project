import { Query, Resolver } from "type-graphql";
import { Client } from "../models/Client";

@Resolver()
export class ClientResolver {
  @Query(() => [Client])
  async hello() {
    return "🔥 Eae carai";
  }
}
