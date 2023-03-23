import { AuthContext } from "@/contexts/AuthContext";
import { Form } from "@unform/web";
import Link from "next/link";
import { useContext } from "react";
import * as C from "../index";

interface LoginFormInterface {
  email: string;
  password: string;
}

export function LoginForm() {
  const { signIn } = useContext(AuthContext);

  async function LoginSubmit(data: LoginFormInterface) {
    await signIn(data);
  }
  return (
    <>
      <Form onSubmit={LoginSubmit}>
        <div className="mt-4">
          <C.TextField
            name="email"
            type="email"
            required
            label="Email Address"
            theme="light"
          />
        </div>
        <div className="mt-4">
          <C.TextField
            name="password"
            type="password"
            required
            label="Password"
            theme="light"
          />
          <Link href="#" className="text-xs text-gray-500">
            Forget Password?
          </Link>
        </div>
        <div className="mt-8">
          <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
            Login
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4"></span>
          <Link href="/register" className="text-xs text-gray-500 uppercase">
            or sign up
          </Link>
          <span className="border-b w-1/5 md:w-1/4"></span>
        </div>
      </Form>
    </>
  );
}
