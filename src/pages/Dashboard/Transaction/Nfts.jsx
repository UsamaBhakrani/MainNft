import "./Nfts.css";
import { NFTData } from "../../../assets/Data/Data";
import edit from '../../../assets/DashboardImg/edit.png';
import { Link,useParams } from "react-router-dom";

function Nfts() {
  return (
    <div className="nfts">
        <p className="heading">NFT's</p>
     <div className=" nft-hold">
        {NFTData.slice(0, 4).map((Data) => (
        
            <div className="nftcard" key={Data.id} >
            <div className="card-hold">
              <div className="tops">
                <Link to={`MarketPlace/${Data.id}`}><img className="bg" src={Data.NFTImg} alt="nftImage" /></Link>
                <div className="glass">
                  <p>For Sale</p>
                </div>
              </div>
              <div className="bottom">
                <div className="name">
                <p>{Data.NFtName}</p>
                <img width={'20px'} src={edit} alt="edit" />
                </div>
                <div className="profile">
                  <div className="left">
                    <img className="pics" src={Data.CreatorImg} alt="profileImg" />
                    <div className="text">
                      <p>{Data.CreatorName}</p>
                      <span>{Data.Username}</span>
                    </div>
                  </div>
                  <div className="right">
                    <span>{Data.Bid}</span>
                    <p>{Data.Price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
     </div>
    </div>
  );
}

export default Nfts;
