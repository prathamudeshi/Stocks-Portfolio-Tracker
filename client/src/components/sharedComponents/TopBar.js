import "./topbar.css";
import { MdNotificationsNone, MdOutlineSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import StockMarketSearch from "../stockMarketComponents/StockMarketSearch";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Portfolio Tracker</span>
        </div>
        <div className="topRight">
          <StockMarketSearch />
          {/* <div className="topbarIconContainer">
            <MdNotificationsNone size="30px" color="white" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <MdOutlineSettings size="30px" color="white" />
          </div> */}
          <div className="topbarIconContainer">
            <Link to="/register">
              <CgProfile size="30px" color="white" />
            </Link>
          </div>
          <div className="topbarIconContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
