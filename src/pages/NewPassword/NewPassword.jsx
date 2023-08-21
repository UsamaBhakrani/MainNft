import "./NewPassword.css";
import { BubblyLink } from "react-bubbly-transitions";
import { AiOutlineEye } from "react-icons/ai";
import ArrowBAck from "../../assets/DashboardImg/ArrowBack.png"

function NewPassword() {
  return (
    <>
      <div className="wrap">
        <div className="center">
          <form>
            <p data-aos="fade-up" data-aos-delay="30" className="head">
            Set new password
            </p>
            <p data-aos="fade-up" data-aos-delay="40" className="head2">
            Set new password
            </p>
            <div data-aos="fade-up" data-aos-delay="70" className="di2">
              <label htmlFor="password">Password</label>
              <input
                className="inputs"
                type="password"
                placeholder="Password"
              />
              <AiOutlineEye className="show" color="white" size={"20px"} />
            </div>
            <div data-aos="fade-up" data-aos-delay="80" className="di2">
              <label htmlFor="password">Confirm Password</label>
              <input
                className="inputs"
                type="password"
                placeholder="Password"
              />
              <AiOutlineEye className="show" color="white" size={"20px"} />
            </div>

            <button
              className="bbb"
              data-aos="fade-up"
              data-aos-delay="90"
              type="submit"
            >
             Reset Password
            </button>
            <p data-aos="fade-up" data-aos-delay="100" className="redirect">
            <img src={ArrowBAck} alt="arrow" /> Back to
            <span className="link">
            <BubblyLink to="/Login">
              Log In
            </BubblyLink>
            </span>
          </p>
          </form>
        </div>
        <div className="bottom">
          <div data-aos="fade-up" data-aos-delay="110" className="bottom-left">
            <p>Need help? Contact</p>
            <a href="#">Contact hello@Artmint.com</a>
          </div>
          <hr />
          <div className="bottom-right">
            <p data-aos="fade-up" data-aos-delay="120" data-aos-offset="10">
              2023 Artmint. All Rights are reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPassword;
