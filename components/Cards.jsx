import Card from "./Card";
import data from "../nft.json";
import "./Cards.css";
const Cards=()=>{
    const NFT = Object(data["NFT"]);  
return(
    
    <div className="cards">
    {NFT.map((nft, i)=>{
            return(
            <Card key={i} index={i}/> 
            )  
    })}
    </div>
 
)
}
export default Cards;