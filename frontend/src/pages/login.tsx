import React from "react";
import Head from "next/head";
import * as C from "@/components";
import { fakeDataTags } from "@/fakeData";
import { SurgeryInterface, TagsInterface } from "@/interfaces";
import { gql, useMutation, useQuery } from "@apollo/client";
import { DELETE_SURGERY, GET_SURGERIES } from "./api/services";
import { client } from "@/lib/apollo";

export default function Home() {
  const [modalState, setModalState] = React.useState({
    open: false,
    isEdit: false,
    currentId: "",
  });
  function openModalCreate() {
    setModalState({ open: true, isEdit: false, currentId: "" });
  }
  function openModalEdit(id: string) {
    setModalState({ open: true, isEdit: true, currentId: id });
  }
  // READ DATA
  const { data, error } = useQuery<{ Surgeries: SurgeryInterface[] }>(
    GET_SURGERIES
  );

  // DELETE DATA
  const [deleteSurgery, deleteSurgeryInfo] = useMutation<
    {
      deleteSurgery: string;
    },
    { deleteSurgeryId: string }
  >(DELETE_SURGERY);

  async function confirmDeleteSurgery(id: string) {
    await deleteSurgery({
      variables: {
        deleteSurgeryId: id,
      },
      update: (cache, { data }) => {
        const surgeriesResponse = client.readQuery({ query: GET_SURGERIES });
        cache.writeQuery({
          query: GET_SURGERIES,
          data: {
            Surgeries: surgeriesResponse?.Surgeries.filter(
              (surgery: any) => surgery.id !== id
            ),
          },
        });
      },
    });
  }
  const [search, setSearch] = React.useState("");
  const filteredData = React.useMemo(() => {
    const lowerSearch = search.toLocaleLowerCase();
    return data?.Surgeries.filter((surgery) =>
      surgery.doctor.toLowerCase().includes(lowerSearch)
    );
  }, [search, data?.Surgeries]);
  return (
    <>
      <Head>
        <title>Surgeries Plans - Login</title>
        <meta
          name="description"
          content="Organization to Doctors and Instrumentators Surgeries Plans"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-700 h-auto p-5 min-h-screen  overflow-x-auto">
        <section className="container px-4 mx-auto">
          <div className="py-6">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <div
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1550831106-2747f0d6a81c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80s')",
                }}></div>
              <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">
                  Surgeries Plans
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  Up your surgeries organization to another level
                </p>
                <a
                  href="#"
                  className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                  <div className="px-4 py-3">
                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>
                  <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                    Sign in with Google
                  </h1>
                </a>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 lg:w-1/4"></span>
                  <a
                    href="#"
                    className="text-xs text-center text-gray-500 uppercase">
                    or login with email
                  </a>
                  <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="email"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                    <a href="#" className="text-xs text-gray-500">
                      Forget Password?
                    </a>
                  </div>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="password"
                  />
                </div>
                <div className="mt-8">
                  <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                    Login
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 md:w-1/4"></span>
                  <a href="#" className="text-xs text-gray-500 uppercase">
                    or sign up
                  </a>
                  <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
