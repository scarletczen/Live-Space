import './App.css'
import Cards from '../components/Cards';
import Category from '../components/Category';
import Footer from '../components/Footer';

function App() {
  return(
    <>
        <div className='header'>
        <h1>Live Spaces</h1>
        <div className='sub'>
          
          <div>
            <img id="verif" src='./assets/verified-user.png'>
            </img>
          </div>
            <div>All NFTs on Cyber either belong to or were minted by their space creator.
            </div>
          </div>
        </div>
        <Category/>
        <Cards/>
        <Footer/>

    </>
  )
}

export default App
