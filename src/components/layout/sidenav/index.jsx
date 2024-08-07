import React from "react";
import Logo from "../../utils/Logo";
import { NavLink } from "react-router-dom";
import { OtherHouses } from "@mui/icons-material";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidenav = () => {
    return (
        <nav className=" py-3 h-screen w-16 bg-primaryclr hover:w-32 text-level-2-text text-center flex flex-col justify-between group transition-all duration-300">
            <div>
                <Logo />
                <ul className="mt-4">
                    <li className="my-4">
                        <NavLink
                            exact
                            to="/"
                            className={({ isActive }) => 
                                `flex items-center justify-center group-hover:justify-start transition-all duration-300 mt-12 mb-6  ${
                                    isActive ? "border-l-2 border-customBlue text-customBlue" : ""
                                }`
                            }
                        >
                            <OtherHouses className="mr-2" />
                            <span className="hidden group-hover:inline-block">Home</span>
                        </NavLink>
                    </li>
                    <li className="my-4">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) => 
                                `flex items-center justify-center group-hover:justify-start transition-all duration-300 mt-6 mb-6 ${
                                    isActive ? "border-l-2 border-customBlue text-customBlue" : ""
                                }`
                            }
                        >
                            <AssessmentOutlinedIcon className="mr-2" />
                            <span className="hidden group-hover:inline-block">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="my-4">
                        <NavLink
                            to="/analytics"
                            className={({ isActive }) => 
                                `flex items-center justify-center group-hover:justify-start transition-all duration-300 mt-6 mb-6 ${
                                    isActive ? "border-l-2 border-customBlue text-customBlue" : ""
                                }`
                            }
                        >
                            <AssignmentTurnedInOutlinedIcon className="mr-2" />
                            <span className="hidden group-hover:inline-block">Analytics</span>
                        </NavLink>
                    </li>
                    <li className="my-4">
                        <NavLink
                            to="/account"
                            className={({ isActive }) => 
                                `flex items-center justify-center group-hover:justify-start transition-all duration-300 mt-6 mb-6 ${
                                    isActive ? "border-l-2 border-customBlue text-customBlue" : ""
                                }`
                            }
                        >
                            <AccountBalanceWalletOutlinedIcon className="mr-2" />
                            <span className="hidden group-hover:inline-block">Account</span>
                        </NavLink>
                    </li>
                    <li className="my-4">
                        <NavLink
                            to="/orders"
                            className={({ isActive }) => 
                                `flex items-center justify-center group-hover:justify-start transition-all duration-300 mt-6 mb-6 ${
                                    isActive ? "border-l-2 border-customBlue text-customBlue" : ""
                                }`
                            }
                        >
                            <LocalMallOutlinedIcon className="mr-2" />
                            <span className="hidden group-hover:inline-block">Orders</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <button className="flex items-center justify-center group-hover:justify-start transition-all duration-300 mb-4">
                <ExitToAppOutlinedIcon className="mr-2" />
                <span className="hidden group-hover:inline-block">Logout</span>
            </button>
        </nav>
    );
};

export default Sidenav;
