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
        <nav className="h-screen w-16 bg-primaryclr hover:w-32 text-level-2-text text-center group">
            <Logo />
            <ul>
                <li className="my-4">
                    <NavLink to="/" className="flex items-center justify-center group-hover:justify-start">
                        <OtherHouses className="mr-2" />
                        <span className="hidden group-hover:inline-block">Home</span>
                    </NavLink>
                </li>
                <li className="my-4">
                    <NavLink to="/dashboard" className="flex items-center justify-center group-hover:justify-start">
                        <AssessmentOutlinedIcon className="mr-2" />
                        <span className="hidden group-hover:inline-block">Dashboard</span>
                    </NavLink>
                </li>
                <li className="my-4">
                    <NavLink to="/analytics" className="flex items-center justify-center group-hover:justify-start">
                        <AssignmentTurnedInOutlinedIcon className="mr-2" />
                        <span className="hidden group-hover:inline-block">Analytics</span>
                    </NavLink>
                </li>
                <li className="my-4">
                    <NavLink to="/account" className="flex items-center justify-center group-hover:justify-start">
                        <AccountBalanceWalletOutlinedIcon className="mr-2" />
                        <span className="hidden group-hover:inline-block">Account</span>
                    </NavLink>
                </li>
                <li className="my-4">
                    <NavLink to="/orders" className="flex items-center justify-center group-hover:justify-start">
                        <LocalMallOutlinedIcon className="mr-2" />
                        <span className="hidden group-hover:inline-block">Orders</span>
                    </NavLink>
                </li>
            </ul>
            <button className="flex items-center justify-center group-hover:justify-start">
                <ExitToAppOutlinedIcon className="mr-2" />
                <span className="hidden group-hover:inline-block">Logout</span>
            </button>
        </nav>
        

    );
};

export default Sidenav;
