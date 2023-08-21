
import Sidebar from "../../components/SideBar/Sidebar"
import "./Dashboard.css"
import Notifiaction from "../../components/Notification/Notifiaction"
import { Outlet } from "react-router-dom"
import Deposit from "./Modals/Deposit"

const Dashboard = () => {
  return (
    <>
     <div className="dashboard">
        <Notifiaction />
        <Sidebar />
        <Outlet />
     </div>
    </>
  )
}

export default Dashboard