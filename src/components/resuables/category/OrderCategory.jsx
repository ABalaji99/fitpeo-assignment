import React from "react"
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
      <div className="h-10 w-10 text-center  rounded-full bg-level-3-text">
        <NavigateNextIcon style={{padding:"8px 0 0 0"}}/>
      </div>
    </div>
  );
};

export default OrderCategory;
