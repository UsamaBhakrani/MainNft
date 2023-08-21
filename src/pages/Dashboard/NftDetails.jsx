
import { useParams,Link } from 'react-router-dom'
import  { NFTData }  from '../../assets/Data/Data';

function NftDetails() {
  const {id} = useParams();
  const singleNft = NFTData.find(item => item.id === id);

  console.log(id)

  return(
    <>
    <Link to='/'>
      <h1 style={{color: 'white'}}>{singleNft.NFtName}</h1> 
      <img src={singleNft.NFTImg} alt="" />
      <h1>{id}</h1>
    </Link>
    </>
  )
}

export default NftDetails