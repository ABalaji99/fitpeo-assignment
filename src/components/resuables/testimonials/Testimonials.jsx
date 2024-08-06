import { Rating } from "@mui/material";
import React from "react";

const Testimonials = ({ usericon, user, testi, rate }) => {
  return (
    <div className="py-2 border-b-level-3-text border-b">
      <div className="flex gap-2 items-center justify-start">
        <img className="w-10 h-10 rounded-full" src={usericon} alt={user} />
        <h1 className="text-lg text-level-1-text">{user}</h1>
      </div>
      <Rating name="half-rating-read" defaultValue={rate} readOnly />
      <p className=" text-xs text-level-2-text">{testi}</p>
    </div>
  );
};

export default Testimonials;
