import React, { useContext } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { DataContext } from "../../hooks";
const HeadNav = () => {
  const { apidata } = useContext(DataContext);
  return (
    <header className=" p-3 bg-primaryclr text-level-2-text flex justify-between align-middle">
      <input type="search" name="search" placeholder="search" id="search" />
      <div className=" flex align-middle justify-between">
        <button className=" p-1 rounded">
          <EmailOutlinedIcon />
        </button>
        <button className=" p-1 rounded">
          <SettingsOutlinedIcon />
        </button>
        <button className=" p-1 rounded">
          <NotificationsNoneOutlinedIcon />
        </button>
        <button className=" w-5 rounded-full">
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
