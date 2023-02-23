/* eslint-disable @next/next/no-img-element */
import { SurgeryInterface } from "@/interfaces";
import React from "react";
import * as Modal from "@/components/Modal";

export const TableRow = (props: SurgeryInterface) => {
  const [modalDeleteState, setModalDeleteState] = React.useState(false);
  function openModalDelete() {
    setModalDeleteState(true);
  }

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
          <div>
            <h2 className="font-medium text-gray-800 dark:text-white ">
              {props.date}
            </h2>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
              {props.hour}
            </p>
          </div>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div>
            <p className="text-gray-700 dark:text-gray-200"> {props.patient}</p>
          </div>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center">
            <img
              className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
              alt=""
            />
            <p className="text-gray-700 dark:text-gray-200 ml-3">
              {props.instrumentator}
            </p>
          </div>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <p className="text-gray-700 dark:text-gray-200">{props.doctor}</p>
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <p className="text-gray-700 dark:text-gray-200 text-ellipsis overflow-hidden w-32">
            {" "}
            {props.startingPoint}
          </p>
          {/* <p className="text-gray-500 dark:text-gray-400 text-ellipsis overflow-hidden w-32">
            {props.startingPoint}
          </p> */}
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <p className="text-gray-700 dark:text-gray-200 text-ellipsis overflow-hidden w-32 ">
            {props.hospitalName}
          </p>
          {/* <p className="text-gray-500 dark:text-gray-400 text-ellipsis overflow-hidden w-32 ">
            {props.hospitalName}
          </p> */}
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="inline px-3 py-1 text-sm font-normal rounded-full text-red-500 gap-x-2 bg-red-100/60 dark:bg-gray-800">
            {props.typeTag}
          </div>
        </td>
        {/* <td className="px-4 py-4 text-sm whitespace-nowrap">
          <p className="text-gray-700 dark:text-gray-200">
            {props.distance} km
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {props.distance + props.distance} km
          </p>
        </td> */}
        {/* <td className="px-4 py-4 text-sm whitespace-nowrap">
          <p className="text-gray-700 dark:text-gray-200">
            {props.toll.totalTolls}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            R$ {props.toll.totalTollsPrice}
          </p>
        </td> */}
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button
            onClick={() => console.log("queijo")}
            className="text-gray-500 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </button>
        </td>
        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <button
            onClick={() => openModalDelete()}
            className="text-red-500 dark:text-red-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              fill="currentColor"
              height="16"
              viewBox="0 0 24 24">
              <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
            </svg>
          </button>
        </td>
      </tr>
      <Modal.DeleteModal
        closeModalDelete={() => setModalDeleteState(false)}
        modalState={modalDeleteState}
      />
    </>
  );
};
