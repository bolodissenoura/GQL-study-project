import { OptionsInterface } from "@/interfaces";
import React from "react";

interface SelectFieldInterface {
  label: string;
  placeholder?: string;
  id: string;
  options: OptionsInterface[];
}

export function SelectField(props: SelectFieldInterface) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
      </label>
      <select
        id={props.id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>{props.placeholder ?? "Selecione uma opção"}</option>
        {props.options.map((item: OptionsInterface) => (
          <>
            <option value={item.id}>{item.label}</option>
          </>
        ))}
      </select>
    </div>
  );
}
