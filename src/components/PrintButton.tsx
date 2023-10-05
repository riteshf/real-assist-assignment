import React from "react";
import { BsPrinter } from "react-icons/bs";
import { Button } from "flowbite-react";

type Props = {
  handleClick?: () => void;
};

const PrintButton = ({ handleClick = () => {} }: Props) => {
  return (
    <Button color="dark" className="text-white" onClick={handleClick}>
      <BsPrinter className="mr-2 h-5 w-5" alt="printn" />
      Print
    </Button>
  );
};

export default PrintButton;
