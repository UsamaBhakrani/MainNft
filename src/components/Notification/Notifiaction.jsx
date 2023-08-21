import "./Notification.css";
import profImg from "../../assets/DashboardImg/profileImg.png";
// import bell from "../../assets/DashboardImg/BellImage.png";
import verified from "../../assets/DashboardImg/Verified.png";
const Notifiaction = () => {
  return (
    <>
      <div className="notification">
        <div className="prof">
          <img src={profImg} alt="profileImg" />
        </div>
        <div className="prof-name">
          <p>
            Augustine <i className="hr"></i> 
            <span>
              Verified <img src={verified} alt="verified" />
            </span>
          </p>
        </div>
        {/* <img className="bell" src={bell} alt="bell" /> */}
      </div>
    </>
  );
};

export default Notifiaction;
