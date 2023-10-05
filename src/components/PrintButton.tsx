import React from "react";
import { BsPrinter } from "react-icons/bs";
import { Button } from "flowbite-react";

type Props = {
  handleClick?: () => void;
};

const PrintButton = ({ handleClick = () => {} }: Props) => {
  return (
    <div className="w-screen h-screen m-auto flex justify-center items-center bg-white">
      <Button color="dark" className="text-white h-10" onClick={handleClick}>
        <BsPrinter className="mr-2 h-5 w-5" alt="printn" />
        Print
      </Button>
    </div>
  );
};

export default PrintButton;
