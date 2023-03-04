import { OptionsInterface } from "@/interfaces";
import { useField } from "@unform/core";
import React from "react";

import ReactSelect, { Props as ReactSelectProps } from "react-select";
import OptionTypeBase from "react-select";

interface Props extends ReactSelectProps {
  name: string;
  label: string;
}

export const SelectField: React.FC<Props> = ({ name, label, ...rest }) => {
  const selectRef = React.useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      setValue: (ref, value) => {
        ref.select.setValue(value || null);
      },
      clearValue: (ref) => {
        ref.select.clearValue();
      },
      getValue: rest.isMulti
        ? (ref) =>
            ref.state.value?.map((option: OptionTypeBase) => option) || []
        : (ref) => (ref.state.value ? ref.state.value.value : ""),
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <ReactSelect ref={selectRef} defaultValue={defaultValue} {...rest} />
    </div>
  );
};
