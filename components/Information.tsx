import { ReactNode } from "react";
import { Large, Body } from "../ui/typography/index";

export const Information = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <>
      <Large color="p-2 rounded-md bg-blue-200">{title}</Large>
      <Body color="p-2">{children}</Body>
    </>
  );
};
