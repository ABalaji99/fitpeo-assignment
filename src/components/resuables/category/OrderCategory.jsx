import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const OrderCategory = ({ CatIcon, catTitle }) => {
  return (
    <div className=" flex justify-between align-middle">
      <h1>
        {" "}
        <CatIcon /> {catTitle}
      </h1>
      <Link to="/">
        <NavigateNextIcon />
      </Link>
    </div>
  );
};

export default OrderCategory;
