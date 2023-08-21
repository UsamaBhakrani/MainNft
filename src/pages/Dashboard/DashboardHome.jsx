import React from "react";
import "./DashboardHome.css";
import bigWallet from "../../assets/DashboardImg/Eth (2).png";
import Ethr from "../../assets/DashboardImg/Eth (1).png";
import RecentTransaction from "../Dashboard/Transaction/RecentTransaction";
import Nfts from "./Transaction/Nfts";
import RecentSales from "../Dashboard/Transaction/RecentSales";
function DashboardHome() {

  return (
    <div className="DashboardHome">
      <div className="row box-wrapper justify-content-center">
        <div className=" box">
          <img src={bigWallet} alt="wallet" />
          <div className="box-right">
            <span>Account Balance</span>
            <p>0.045ETH</p>
          </div>
        </div>
        <div className=" boxx">
          <img src={Ethr} alt="wallet" />
          <div className="box-right">
            <span>ETH ERC</span>
            <p>0.000</p>
            <span className="mini">
            -$0.00
            </span>
          </div>
        </div>
        <div className=" boxx">
          <img src={Ethr} alt="wallet" />
          <div className="box-right">
            <span>Account Balance</span>
            <p>0.045ETH</p>
            <span className="mini">
            -$0.00
            </span>
          </div>
        </div>
      </div>
      <div className="box-btn">
          <button className="btn1">Deposit</button>
          <button className="btn2">Withdraw</button>
        </div>
      <RecentTransaction />
      <Nfts />
      <RecentSales />
    </div>
  );
}

export default DashboardHome;
