import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { BubblyLink } from "react-bubbly-transitions";
import chevron from "../../assets/chevron.png";
import { useState } from "react";
import Img1 from "../../assets/DashboardImg/wallet.png";
import Img2 from "../../assets/DashboardImg/photo.png";
import Img3 from "../../assets/DashboardImg/Union (1).png";
import Img4 from "../../assets/DashboardImg/Transcation.png";
import Img5 from "../../assets/DashboardImg/Vector.png";
import Img6 from "../../assets/DashboardImg/Market.png";
import Img7 from "../../assets/DashboardImg/profile.png";
import Img8 from "../../assets/DashboardImg/Setting.png";
import Img9 from "../../assets/DashboardImg/logout.png";
import Deposit from "../../pages/Dashboard/Modals/Deposit";
const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
  const hideSide = () => {
    setisOpen(!isOpen);
    const tog = document.getElementById("tog");
    tog.classList.toggle("aa");
  };
  const [showModal, setShowModal] = useState(false);
  function Moddy() {
    const [showModal, setShowModal] = useState(false);
  }

  return (
    <>
      <div className="mobile-sidebar">
        <ul>
          <Link className="link">
            <img src={Img3} alt="account" />
            <span>Mint</span>
          </Link>
          <Link to="/MarketPlace" className="link">
            <img src={Img6} alt="account" />
            <span>Market place</span>
          </Link>
          <Link to="NftProfile" className="link">
            <img style={{ width: "15px" }} src={Img7} alt="account" />
            <span>Profile</span>
          </Link>
          <Link to="Settings" className="link">
            <img src={Img8} alt="account" />
            <span>Settings</span>
          </Link>
        </ul>
      </div>
      <div className="sidebar" style={{ width: isOpen ? "55px" : "232px" }}>
        <div className="sidebar-top">
          <p
            style={{
              fontSize: isOpen ? "13px" : "16px",
              display: isOpen ? "none" : "block",
            }}
            className="logo"
          >
            <Link to="/">Logo</Link>
          </p>
          <img
            id="tog"
            onClick={hideSide}
            className="chev"
            src={chevron}
            alt="chevron"
          />
        </div>
        <div className="sidebar-bottom">
          <ul className="sidebar-list">
            <NavLink end to="/Dashboard" className="sidebar-link">
              <li className="link">
                <img src={Img1} alt="account" />
                <span>Account Sum</span>
              </li>
            </NavLink>
            <li className="sidebar-link">
              <Link className="link">
                <img src={Img2} alt="account" />
                <span>NFT Collection</span>
              </Link>
            </li>
            <Link className="sidebar-link" onClick={() => setShowModal(true)}>
              <li className="link">
                <img src={Img3} alt="account" />
                <span>Mint</span>
              </li>
              {showModal && <Deposit mod={Moddy}  />}
            </Link>
            <li className="sidebar-link">
              <Link className="link">
                <img src={Img4} alt="account" />
                <span>Transaction</span>
              </Link>
            </li>
            <li className="sidebar-link">
              <Link className="link">
                <img src={Img5} alt="account" />
                <span>Sales</span>
              </Link>
            </li>
            <li className="sidebar-link">
              <BubblyLink to="/MarketPlace" className="link">
                <img src={Img6} alt="account" />
                <span className="market">Market Place</span>
              </BubblyLink>
            </li>
            <NavLink to="NftProfile" className="sidebar-link">
              <li className="link">
                <img src={Img7} alt="account" />
                <span>My NFT Profile</span>
              </li>
            </NavLink>
            <NavLink to="Settings" className="sidebar-link">
              <li className="link">
                <img src={Img8} alt="account" />
                <span>Settings</span>
              </li>
            </NavLink>
          </ul>
          <Link to="/" className="logout">
            <img src={Img9} alt="account" />
            <span style={{ opacity: isOpen ? "0" : "1" }}>Log out</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
