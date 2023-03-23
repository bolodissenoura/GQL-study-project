import React from "react";

interface DefaultButtonInterface {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  icon?: JSX.Element;
}

export function DefaultButton(props: DefaultButtonInterface) {
  return (
    <>
      <button
        onClick={() => props.onClick()}
        disabled={props.disabled ?? false}
        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 disabled:opacity-50 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
        {props.icon ? (
          <>{props.icon}</>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </>
        )}
        <span>{props.text}</span>
      </button>
    </>
  );
}
