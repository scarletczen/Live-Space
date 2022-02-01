import "./Category.css";
const Category=()=>{
    return(
        <>
        <div className="categoryContainer">
            <div className="category"><img classname="icons"src="./assets/fire.png"/>24h Trending</div>
            <div className="category">Latest Shows</div>
            <div className="category">Most Popular</div>
            <div className="category"><img classname="icons"src="./assets/diamond.png"/>In Genesis</div>
            <div className="category"><img classname="icons"src="./assets/hindu.png"/>In Temple</div>
            <div className="category"><img classname="icons"src="./assets/tornado.png"/>In Void</div>
            <div className="category"><img classname="icons"src="./assets/gorilla.png"/>#BAYC</div>

        </div>
        </>
    )

}
export default Category;