import React, { useEffect, useState } from "react";
import { useMenu } from "../context/Context";
import './menu.css'
import LocationDropdown from "./LocationDropdown";
// import './location.css'


function Foods() {

  const { foods, filteredFoods, filterByType, addToCart } = useMenu();
  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true); 
    const delay = setTimeout(() => {
      setLoading(false); 
    }, 2000); 
    return () => clearTimeout(delay);
  }, []);

  
  useEffect(() => {
    setSearchTerm("");
  }, [filteredFoods]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterByType = (type) => {
    filterByType(type);
  };

  const filteredResults = searchTerm
    ? filteredFoods.filter((food) =>
        food.name.toLowerCase().includes(searchTerm)
      )
    : filteredFoods;

  const handleCart = (item) => {
    addToCart(item);
    
    
  }


  if (loading) {
    return <div className="loading">Loading...</div>; 
  }
  

  return (
    <>

    <div className="menu">

        <h4 className='menu-title'>Our Menu</h4>

      <div className="search">

      <input
        type="text"
        placeholder="Search food..."
        value={searchTerm}
        onChange={handleSearch}
      />


      <div className="location">

      <LocationDropdown/>
        
      </div>

      </div>  

      
 
      <div className="menu-btns">
        <button className="btns"  onClick={() => handleFilterByType("all")}>All</button>
        <button className="btns"  onClick={() => handleFilterByType("fastfood")}>Fast Food</button>
        <button className="btns"  onClick={() => handleFilterByType("chinese")}>Chinese</button>
        <button className="btns"  onClick={() => handleFilterByType("italian")}>Italian</button>
        <button className="btns"  onClick={() => handleFilterByType("indian")}>Indian</button>
        <button className="btns"  onClick={() => handleFilterByType("dessert")}>Dessert</button>
        <button className="btns"  onClick={() => handleFilterByType("shakes")}>Shakes</button>
        <button className="btns"  onClick={() => handleFilterByType("hotcoffes")}>Hot Coffees</button>
        <button className="btns"  onClick={() => handleFilterByType("colddrinks")}>Cold Drinks</button>
      </div>


      <div className="menu-container">
     
     {     
         filteredResults.map((curElem) => {

            const {id, name, image, price, text} = curElem;

            return (

              <div className="menu-card" key={id}>

              <div className="menu-image">
              <img src={image} alt={name} />
              </div>
              <div className="menu-name"> <h2>{name}</h2> </div>
              <div className="menu-price"> <h3>{price} taka</h3> </div>
              <div className="menu-desc"> <p>{text}</p> </div>

              {/* <NavLink to='/cart' onClick={() => handleCart(curElem)}  ><button className="add">Order Now</button></NavLink>  */}
              <button onClick={() => handleCart(curElem)} className="add">Order Now </button> 
             </div>  
                          
            )
          })  
        }              
    </div>

    </div>
    </>
  );
}

export default Foods;



