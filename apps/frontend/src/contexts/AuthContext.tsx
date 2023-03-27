import { GENERATE_TOKEN } from "@/pages/api/auth.service";
import { useMutation } from "@apollo/client";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createContext } from "react";

interface SignInInterface {
  email: string;
  password: string;
}

interface UserInterface {
  email: string;
  name: string;
}
interface AuthContentInterface {
  isAuthenticated: boolean;
  user?: UserInterface | null;
  signIn: (data: SignInInterface) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContentInterface);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<UserInterface | null>(null);
  const isAuthenticated = !!user;
  const [signInRequest] = useMutation(GENERATE_TOKEN);

  useEffect(() => {
    const isLoginPath = Router.pathname === "/login";
    const isRegisterPath = Router.pathname === "/register";
    const { "token-surgery-plans": token } = parseCookies();
    if (token && isLoginPath) {
      toast("You already logged", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "info",
      });
      Router.push("/");
    }
    if (!token && !isRegisterPath) {
      Router.push("/login");
    }
  }, []);

  async function signIn({ email, password }: SignInInterface) {
    await signInRequest({
      variables: {
        email: email,
        password: password,
      },
      onError(error) {
        toast(error.message, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      },
      onCompleted(data) {
        setCookie(undefined, "token-surgery-plans", data?.singIn?.token, {
          maxAge: 60 * 60 * 1, // 1 hour
        });
        setUser(data?.singIn?.user);
        Router.push("/");
      },
    });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
