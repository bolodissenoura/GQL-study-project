import React from "react";
import { useField } from "@unform/core";

interface TextFieldInterface {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  name: string;
}

export function TextField(props: TextFieldInterface) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { fieldName, registerField } = useField(props.name);

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
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
      </label>
      <input
        ref={inputRef}
        type={props.type ?? "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        required={props.required ?? false}
      />
    </div>
  );
}
