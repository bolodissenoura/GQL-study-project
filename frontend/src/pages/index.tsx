import React from "react";
import Head from "next/head";
import * as C from "@/components";
import { fakeDataTags } from "@/fakeData";
import { SurgeryInterface, TagsInterface } from "@/interfaces";
import { gql, useMutation, useQuery } from "@apollo/client";
import { DELETE_SURGERY, GET_SURGERIES } from "./api/services";
import { client } from "@/lib/apollo";

export default function Home() {
  const [modalCreateState, setModalCreateState] = React.useState(false);
  function openModalCreate() {
    setModalCreateState(true);
  }
  // READ DATA
  const { data, loading, error } = useQuery<{ Surgeries: SurgeryInterface[] }>(
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

  // EDIT DATA

  return (
    <>
      <Head>
        <title>Surgeries Plan</title>
        <meta
          name="description"
          content="Planejamento de cirurgias para instrumentador"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-400 h-auto p-5 min-h-screen overflow-x-auto">
        <section className="container px-4 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center mt-4 gap-x-3">
              <C.DefaultButton
                onClick={() => openModalCreate()}
                text="Add surgery"
              />
              <C.DefaultButton
                onClick={() => openModalCreate()}
                disabled
                text="Add TAG"
              />
            </div>
          </div>
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
              <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                View all tags
              </button>

              {fakeDataTags.map((item: TagsInterface) => (
                <>
                  <button
                    key={item.id}
                    className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                    <div
                      className={`inline px-3 py-1 text-sm font-normal rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800 text-${item.color}-500`}>
                      {item.title}
                    </div>
                  </button>
                </>
              ))}
            </div>

            <div className="relative flex items-center mt-4 md:mt-0">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          {data?.Surgeries ? (
            <>
              <div className="flex flex-col mt-6  ">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8 ">
                  <div className="inline-block min-w-full max-h-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-y-auto ">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rtl:pr-11 rtl:pl-5 sm:px-6 lg:px-8">
                        <C.TableHeader />
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900 ">
                          {data?.Surgeries?.map((item: SurgeryInterface) => (
                            <>
                              <C.TableRow
                                key={item.id}
                                id={item.id}
                                startingPoint={item.startingPoint}
                                date={item.date}
                                doctor={item.doctor}
                                hospitalName={item.hospitalName}
                                hour={item.hour}
                                instrumentator={item.instrumentator}
                                patient={item.patient}
                                typeTag={item.typeTag}
                                confirmDeleteSurgery={() =>
                                  confirmDeleteSurgery(item.id)
                                }
                              />
                            </>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="sm:flex sm:items-center justify-center mt-8 w-full">
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  You dont have surgeries yet, try to :{" "}
                </p>

                <div className="flex items-center ml-8 gap-x-3">
                  <C.DefaultButton
                    onClick={() => openModalCreate()}
                    text="Add surgery"
                  />
                </div>
              </div>
            </>
          )}
        </section>

        <C.CreateModal
          closeModalDelete={() => setModalCreateState(false)}
          modalState={modalCreateState}
        />

        {error ? <C.ToastError title={error?.message} /> : <></>}
      </main>
    </>
  );
}
