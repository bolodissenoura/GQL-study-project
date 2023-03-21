import { AuthContext } from "@/contexts/AuthContext";
import { Form } from "@unform/web";
import { useContext } from "react";
import * as C from "../index";

interface RegisterFormInterface {
  email: string;
  password: string;
}

export function RegisterForm() {
  const { signIn } = useContext(AuthContext);

  async function RegisterSubmit(data: RegisterFormInterface) {
    await signIn(data);
  }
  return (
    <>
      <Form onSubmit={RegisterSubmit}>
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
        </div>
        <div className="mt-8">
          <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
            Register for free
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4"></span>
          <a href="/login" className="text-xs text-gray-500 uppercase">
            or Login
          </a>
          <span className="border-b w-1/5 md:w-1/4"></span>
        </div>
      </Form>
    </>
  );
}
