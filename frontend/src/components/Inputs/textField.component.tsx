import React from "react";
import { useField } from "@unform/core";

interface TextFieldInterface {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  name: string;
  theme?: string;
}

export function TextField(props: TextFieldInterface) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue } = useField(props.name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, inputRef, registerField]);

  return (
    <div>
      <label
        htmlFor={props.name}
        className={
          props.theme
            ? "block text-gray-700 text-sm font-bold mb-2"
            : "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        }>
        {props.label}
      </label>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        type={props.type ?? "text"}
        className={
          props.theme
            ? "bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
        placeholder={props.placeholder}
        required={props.required ?? false}
      />
    </div>
  );
}
