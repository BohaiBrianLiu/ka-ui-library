import React from "react";

export interface Button {
  label: string;
}

export const BaseButton = (props: Button) => {
  return <button>{props.label}</button>;
};
