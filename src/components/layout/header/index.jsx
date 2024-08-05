import React, { useContext } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { DataContext } from "../../hooks";
const HeadNav = () => {
  const { apidata } = useContext(DataContext);
  return (
    <header className=" p-6 bg-primaryclr text-level-2-text flex justify-between align-middle">
      <input type="search" className=" bg-input border border-white-50 w-80 p-2 outline-none rounded-lg border-opacity-10" name="search" placeholder="search" id="search" />
      <div className=" flex align-middle justify-between">
        <button className=" mx-2 bg-icon-bgclr p-2 rounded-full">
          <EmailOutlinedIcon />
        </button>
        <button className="  mx-2 bg-icon-bgclr p-2 rounded-full">
          <SettingsOutlinedIcon />
        </button>
        <button className=" mx-2 bg-icon-bgclr p-2 rounded-full">
          <NotificationsNoneOutlinedIcon />
        </button>
        <button className=" w-10 mx-2 rounded-full">
          {
            apidata.slice(0,1).map((user)=>(
              <img src={user.userIcon} className="rounded-full" alt={user.userName} />
            ))
          }
          </button>
      </div>
    </header>
  );
};

export default HeadNav;
