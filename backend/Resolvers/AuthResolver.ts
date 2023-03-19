import { Arg, Mutation, Resolver } from "type-graphql";
import { UserMongo } from "../mongodb/models/User";
import { compare } from "bcryptjs";
import Auth from "../models/Auth";
import AuthConfig from "../config/auth";
import { sign } from "jsonwebtoken";

@Resolver(Auth)
export class AuthResolver {
  @Mutation(() => Auth)
  async singIn(@Arg("email") email: string, @Arg("password") password: string) {
    const user = await UserMongo.findOne({
      email,
    });

    if (!user) {
      throw new Error("Incorrect email/password combination.");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error("Incorrect email/password combination.");
    }
    const { secret, expiresIn } = AuthConfig.jwt;

    const token = sign({}, secret, {
      subject: `"${user?._id}"`,
      expiresIn,
    });

    return {
      token,
      user,
    };
  }
}
