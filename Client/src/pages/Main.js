import coin from '../Dollar-Gold-Coin.png';
import '../App.css';
//import SearchBar from '../components/Search_bar';
import NavBar from '../components/Nav_bar';
import Footer from '../components/Footer';
import Hello from '../components/Hello';
import React, {useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Main = () => {

  let products = []
  const [searchResults,setSearchResults] = useState()
  const [data,setData] = useState()
  const [click, isClicked] = useState(true)
  const [inputValue, setInputValue] = useState()
  const [lowestPrice, setLowestPrice] = useState()

  function search(e){
    isClicked(false)
    setLowestPrice(null)
    setSearchResults(inputValue)
    const formdata = new FormData(e.target);
    var jsonObject = {};
    formdata.forEach((value, key) => {jsonObject[key] = value});
    e.preventDefault();
    try {
      fetch(`/search`, {
        method: 'POST',
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObject),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          isClicked(true)
          setData(resp)
          resp.map((item) => {item.map((subitem)=>{products.push({
            name: subitem.name,
            url: subitem.url,
            img: subitem.img,
            price: subitem.price,
            shop: subitem.vendor
          })})})
          const lowest = products.reduce((previous, current) => {
            return current.price < previous.price ? current : previous;
          });
          setLowestPrice(lowest)
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
    <NavBar></NavBar>
    <header className="App-header">
      <Hello></Hello>
      
      <img src={coin} className="App-logo" alt="logo" />
      <form onSubmit={search}>
        <div>
          <div className="flex justify-center mt-8 mb-6">
            <p className="text-4xl text-center text-dark-blue font-bold">
              Wyszukaj ceny produktu:
            </p>
          </div>
          <div className="flex justify-center mt-8 mb-6">
            
              <input
                id="search"
                type="text"
                placeholder="Wpisz nazwę produktu"
                className="input input-bordered sm:input border-neutral-700 w-4/5 text-white rounded-none rounded-l-lg"
                onChange={(e) => setInputValue(e.target.value)}
                name="name"
                required
              />
              <button type="submit" className="btn bg-[#d4af37] text-black hover:bg-[#FFFFFF] rounded-none rounded-r-lg input-bordered border-neutral-700">Szukaj</button>
          </div>
          {lowestPrice && <><div className="flex justify-center m-10">
                              <div className='flex justify-center rounded-md w-96 h-auto shadow-[0_0_16px_0_rgba(0,0,0,0.5)] bg-[#2a303c] m-4 break-words flex-wrap p-4 flex-col'>
                                <p className="text-[#FF0000]">NAJLEPSZA OFERTA!</p>
                                <a href={`${lowestPrice.url}`}>
                                  <div className="flex justify-center"><img className='w-20' src={`${lowestPrice.img}`} alt="Zdjęcie poglądowe produktu"></img></div>
                                  <div className='text-[#d4af37]'>{lowestPrice.name} </div>
                                  <div className=''>Cena: {lowestPrice.price} zł </div> 
                                  <div>Sklep: {lowestPrice.shop}</div>
                                </a>
                              </div>
                            </div>
                            <p>Pozostałe wyniki wyszukiwania dla "{searchResults}":</p></>}
          <div className="lg:flex justify-center my-10 mx-20">
            {click ? data ? data.map((item) =>{
              return(
                <>
                  <div className=''>
                    {item.map((subitem) => {
                      return <div className="flex-row w-auto h-auto">
                              <div className='rounded-md w-96 h-auto shadow-[0_0_16px_0_rgba(0,0,0,0.5)] bg-[#2a303c] m-4 break-words flex-wrap p-4'>
                                <a href={`${subitem.url}`}>
                                  <div className="flex justify-center"><img className='w-20' src={`${subitem.img}`} alt="Zdjęcie poglądowe produktu"></img></div>
                                  <div className='text-[#d4af37]'>{subitem.name} </div>
                                  <div className=''>Cena: {subitem.price} zł </div> 
                                  <div>Sklep: {subitem.vendor}</div>
                                </a>
                              </div>
                            </div>})}
                            
                  </div>
                </>
              )
            }) : 
            console.log("loading") : <CircularProgress/>}
          </div>
        </div>
        </form>
    </header>
    <Footer></Footer>
    </div>
  );
}

export default Main;
