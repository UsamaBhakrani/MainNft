import { useParams, Link } from "react-router-dom";
import { NFTData } from "../../assets/Data/Data";

function NftDetails() {
  const { id } = useParams();
  const singleNft = NFTData.map((item) => {
    return (
      <Link key={item.id} to={id}>
        <div style={{ color: "white" }}>
          {item.Username}
          <img
            style={{ width: "50px", height: "50px" }}
            src={item.NFTImg}
            alt=""
          />
        </div>
        ;
      </Link>
    );
  });

  console.log(NFTData);

  return (
    <>
      {singleNft}
      <Link to={id}>
        <h2 style={{ color: "white" }}>Hello World</h2>
      </Link>
    </>
  );
}

export default NftDetails;
