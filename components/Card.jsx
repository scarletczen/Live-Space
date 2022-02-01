import "./Card.css";
import data from "../nft.json";
const Card = (props) => {
  let name, url, creator, address = '';
  let i = parseInt(props.index);
  name=data["NFT"][i]["name"];
  url=data["NFT"][i]["url"];
  creator=data["NFT"][i]["creator"];
  address=data["NFT"][i]["address"];
  
  return(
      <div className="cardBox">
          <div className="imageBox">
            <img className="image" src={url}/>
          </div>
          <div className="detailBox">
              <div className="detailHead">{name}</div>
              <div className="link">
                  <div className="creator">
                  {creator}
                  </div>
                  <div className="address">
                    {address}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Card;