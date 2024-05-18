import React from "react";

interface DateProps {
  date: string;
}

const Date = ({ date }: DateProps) => {
  return (
    <div className="w-10 h-10 bg-slate-500 flex flex-col translate-x-10 items-center px-2 text-white">
      <h1 className="font-bold">{date}</h1>
      <h1 className="text-xs font-bold">May</h1>
    </div>
  );
};

export default Date;
