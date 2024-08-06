import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const OrderCategory = ({ CatIcon, catTitle, catbg, caticonclr }) => {
  const iconStyles = {
    color: caticonclr,
    background: catbg,
  };
  return (
    <div className=" flex justify-between align-middle py-2 px-3">
      <h1 className="flex justify-start items-center">
        {" "}
        <div type="button" className=" p-4 mr-3 rounded-full w-max" style={iconStyles}>
          <CatIcon />
        </div>
        {catTitle}
      </h1>
      <Link to="/" className="p-3 rounded-full bg-level-3-text">
        <NavigateNextIcon />
      </Link>
    </div>
  );
};

export default OrderCategory;
