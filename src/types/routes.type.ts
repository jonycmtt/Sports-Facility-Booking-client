import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TUserTypes = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserTypes[];
};
