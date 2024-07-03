import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  variant: "dark" | "light";
  width?: string;
  height?: string;
  margin?: string;
}

export type WrapperProps = Pick<
  ButtonProps,
  "variant" | "disabled" | "width" | "height" | "margin"
>;
