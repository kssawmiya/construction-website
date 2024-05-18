import React from "react";
import { FaPlusSquare } from "react-icons/fa";

interface ChooseButtonProps {
  lable: string;
}

const ChooseButton = ({ lable }: ChooseButtonProps) => {
  return (
    <>
      <div className="flex bg-slate-200 w-[450px] h-12 justify-between border-slate-300 border-b-2 border-solid">
        <button className="p-2">{lable}</button>
        <FaPlusSquare size={50} />
      </div>
    </>
  );
};

export default ChooseButton;
