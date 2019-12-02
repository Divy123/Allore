import React, { useContext } from "react";
import Emoji from "react-emoji-render";

import Sidenav from "./Sidenav";
import DashboardCarousel from "./DashboardCarousel";
import "./UserDashboard.css";
import { AuthContext } from "../../contexts/authContext";

const UserDashboard = () => {
  const { state } = useContext(AuthContext);
  return (
    <>
      <Sidenav />
      <h3 className="center-align">
        <Emoji text={`Hi ${state.name}! 👋`} />
      </h3>
      <div className="container">
        <p className="flow-text center-align">
          Welcome to Allore! It has not been many days since we last met each
          other.
        </p>
        <p className="flow-text center-align">
          <Emoji text="I hope you missed me because I'm not that useless enough. Want to know what all I can do, Roll Down Your Eyes 👀." />
        </p>
        <DashboardCarousel />
      </div>
    </>
  );
};

export default UserDashboard;
