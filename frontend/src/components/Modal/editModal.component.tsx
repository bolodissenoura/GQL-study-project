import { fakeDataTags } from "@/fakeData";
import { GET_SURGERY } from "@/pages/api/services";
import { type SurgeryInterface } from "@/interfaces";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Form } from "@unform/web";
import React from "react";
import Modal from "react-modal";
import * as C from "../index";
import { customStyles } from "./modal.styles";

interface EditModalInterface {
  titleModal?: string;
  closeModalEdit: () => void;
}

interface InfoInterface {
  info: {
    open: boolean;
    isEdit: boolean;
    currentId: string;
  };
}

export function EditModal(props: EditModalInterface & InfoInterface) {
  const [getSurgery, getSurgeryInfo] = useLazyQuery<
    { Surgery: SurgeryInterface },
    { surgeryId: string }
  >(GET_SURGERY);

  const [initialValues, setInitialValues] = React.useState<SurgeryInterface>({
    id: "",
    date: "",
    doctor: "",
    hospitalName: "",
    hour: "",
    instrumentator: "",
    startingPoint: "",
    typeTag: "ORT",
    patient: "",
  });

  React.useEffect(() => {
    if (!props.info.isEdit) return;

    async function getValues() {
      const currentSurgery = await getSurgery({
        variables: { surgeryId: props.info.currentId },
      });
      console.log(currentSurgery);
      setInitialValues({
        id: props.info.currentId,
        date: currentSurgery.data?.Surgery?.date || "",
        doctor: currentSurgery.data?.Surgery?.doctor || "",
        hospitalName: currentSurgery.data?.Surgery?.hospitalName || "",
        hour: currentSurgery.data?.Surgery?.hour || "",
        instrumentator: currentSurgery.data?.Surgery?.instrumentator || "",
        startingPoint: currentSurgery.data?.Surgery?.startingPoint || "",
        typeTag: "ORT",
        patient: currentSurgery.data?.Surgery?.patient || "",
      });
    }
    getValues();
  }, [getSurgery, props.info]);

  function handleSubmit(data: any) {
    console.log(data);
    props.closeModalEdit();
  }
  return (
    <>
      <Modal
        isOpen={props.info.open}
        onRequestClose={props.closeModalEdit}
        style={customStyles}
        contentLabel="Edit modal">
        <Form onSubmit={handleSubmit} initialData={initialValues}>
          <div className="relative w-full h-full max-w-2xl md:h-auto ">
            <div className="relative rounded-lg shadow bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {props.titleModal ?? "Modal de ação"}
                </h3>
                <button
                  onClick={() => props.closeModalEdit()}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <C.TextField name="date" type="date" required label="Data" />
                  <C.TextField name="hour" type="time" required label="Hora" />

                  <C.TextField
                    name="instrumentator"
                    type="text"
                    required
                    label="Instrumentator"
                  />
                  <C.TextField
                    name="doctor"
                    type="text"
                    required
                    label="Doctor"
                  />
                  <C.TextField
                    name="startingPoint"
                    type="text"
                    required
                    label="Starting Point"
                  />
                  <C.TextField
                    name="hospitalName"
                    type="text"
                    required
                    label="Hospital"
                  />
                  <C.SelectField
                    onChange={() => console.log("oi")}
                    id="Tag"
                    label="Tag"
                    options={fakeDataTags}
                    placeholder="ORT"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="defaultModal"
                  type="submit"
                  className="text-white w-1/2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                  Save changes
                </button>
                <button
                  onClick={() => props.closeModalEdit()}
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-gray-500 w-1/2 bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  Close
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}
