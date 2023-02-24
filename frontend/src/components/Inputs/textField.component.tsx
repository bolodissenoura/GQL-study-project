import React from "react";

interface TextFieldInterface {
  label: string;
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: () => void;
}

export function TextField(props: TextFieldInterface) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
      </label>
      <input
        onChange={() => props.onChange()}
        type={props.type ?? "text"}
        id={props.id}
        value={props.value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        required={props.required ?? false}
      />
    </div>
  );
}
