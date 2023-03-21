import { AuthContext } from "@/contexts/AuthContext";
import { CREATE_USER } from "@/pages/api/auth.service";
import { useMutation } from "@apollo/client";
import { Form } from "@unform/web";
import Router from "next/router";
import { useContext } from "react";
import { toast } from "react-toastify";
import * as C from "../index";

interface RegisterFormInterface {
  email: string;
  name: string;
  id: string;
  password: string;
}

type RegisterFormWithoutIdInterface = Omit<RegisterFormInterface, "id">;

export function RegisterForm() {
  const [createUser] = useMutation<
    { createUser: RegisterFormInterface },
    { createUserObject: RegisterFormWithoutIdInterface }
  >(CREATE_USER);
  async function RegisterSubmit(data: RegisterFormInterface) {
    await createUser({
      variables: {
        createUserObject: {
          email: data?.email,
          name: data?.name,
          password: data?.password,
        },
      },
      onError: (error) => {
        toast(error.message, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      },
      onCompleted: () => {
        Router.push("/login");
        toast(`Wellcome ${data.name} 🎉 ! Now, try to login.`, {
          hideProgressBar: true,
          autoClose: 4000,
          type: "success",
        });
      },
    });
  }
  return (
    <>
      <Form onSubmit={RegisterSubmit}>
        <div className="mt-4">
          <C.TextField
            name="name"
            type="name"
            required
            label="Your Name"
            theme="light"
          />
        </div>
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
