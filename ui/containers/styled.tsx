import tw from "tailwind-styled-components";
import { FC } from "react";

export const ContainerPreview: FC<any> = tw.section`
  w-full p-4 flex flex-col items-center md:flex-row-reverse text-[#2C3E50] justify-evenly bg-[#FEF5E7]
`;
