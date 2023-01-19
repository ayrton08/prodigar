import tw from "tailwind-styled-components";
import { FC } from "react";

interface IProps {
  reverse: boolean;
}

export const ContainerPreview: FC<any> = tw.section<IProps>`
  w-full p-4 flex flex-col items-center md:flex-row-reverse text-[#2C3E50] justify-evenly bg-[#FEF5E7]
`;
