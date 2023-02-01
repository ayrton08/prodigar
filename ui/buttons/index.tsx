import { MouseEventHandler, ReactNode } from "react";

interface IButtons {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}

export const MainButton = ({ children, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      disabled
      className=" w-full max-h-14 bg-blue-300 flex items-center justify-center text-white font-montserrat font-bold text-sm md:text-base py-2 md:py-4 md:px-2 rounded-lg cursor-pointer"
    >
      {children}
    </button>
  );
};

export const SuccessButton = ({ children, onClick, type }: IButtons) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled
      className=" w-full max-h-14 bg-green-500 flex items-center justify-center text-white font-montserrat font-bold text-sm md:text-base py-2 md:py-4 md:px-2 rounded-lg cursor-pointer"
    >
      {children}
    </button>
  );
};

export const CancelButton = ({ children, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      disabled
      className=" w-full bg-slate-500 flex items-center justify-center text-white font-montserrat font-bold text-sm md:text-base py-2 md:py-4 md:px-2 rounded-lg cursor-pointer"
    >
      {children}
    </button>
  );
};

export const DeleteButton = ({ children, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      disabled
      className=" w-full bg-red-600 flex items-center justify-center text-white font-montserrat font-bold text-base py-4 px-2 rounded-lg cursor-pointer"
    >
      {children}
    </button>
  );
};

type BurguerProps = {
  open: boolean;
  handleClick: () => void;
};

export const BurguerButton = (props: BurguerProps) => {
  return (
    <div
      className={`icon nav-icon-5 ${props.open ? "open" : ""}`}
      onClick={props.handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
