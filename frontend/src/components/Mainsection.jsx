import React, {useState} from 'react'
import './mainsection.css'
import { NavLink } from 'react-router-dom'
import LovedFood from './LovedFood'
import Star from './Star';


function Mainsection() {

    const [showOffer, setShowOffer] = useState(false);

  return (

     <>

     <div className="main-image">
     <img src='/images/pexels.jpg'></img>
     </div>


    <div className="content1">

     <div className="main-text">Welcome</div> 
     <div className="main-text2"><span>to cluster!</span></div>
    
    </div>  


    <div className="content2">

        <div className="image2">

        <img src='images/chik.jpg'></img>

        </div>

    <div className="main-text3">
        <p>Discover a culinary paradise at our restaurant,
             where every dish tells a story of passion, flavor, and excellence.
             From mouthwatering pizzas to aromatic biryanis, from creamy pastas to indulgent desserts, 
             our diverse menu promises an unforgettable dining experience
            With a dedication to quality ingredients, 
            meticulous preparation, and impeccable presentation, we invite you to savor the essence of
            gastronomic delight in every bite. Come, indulge your senses and embark on a
            culinary journey like no other at our esteemed establishment.</p>

            <NavLink to='/menu'><button className='explore'>Explore Menu</button></NavLink>

            
    </div>
    </div>


    <div className="loved-dish">

        <div className="loved-heading"> <h2>Our most loved dishes</h2></div>


        <div className="loved-dish-container">
            
            {

                LovedFood.map((curElem) => {

                       const {id, name, text, image, rating, reviews, stars}  = curElem;

                    return(
                        <>

                        <div className="loved-card-container"  key={id}>
                        
                            <div className="loved-image-container">

                                <img src={image} ></img>

                            </div>

                            <div className="food">          

                            <div className="food-name">

                                <h3>{name}</h3>  

                            </div>


                            <div className="rat-rev">

                              <div className="rating">

                                  <h3>Rating: {rating}</h3>

                                  <div className='stars'> <Star stars ={stars}/></div>

                                  {/* <span>{stars}</span> */}

                              </div>

                              <div className="review">

                                    <p>{reviews} reviews</p>

                              </div>
                              
                              
                            </div>    

                            <div className="food-details">

                                    {text}

                            </div>

                            </div> 
                                                                     
                        </div>                     
                       
                        </>
                    )
                })
            }

    </div>

    </div>

  
     <div className="offer">

        <div className="offer-border">
        
        <h2>Todays's Offer !</h2>
        

        <button onClick={() => setShowOffer(!showOffer)}>
        {showOffer ? 'Close' : 'Show Offer'}
      </button>
      
      {showOffer && (
        <div className="offer-content">
          <img src='/images/offer.jpg' alt="Offer" />
          <p>Buy one get one free on our most popular dishes.</p>
        </div>
      )}
        

    </div>       
    </div>               
        

    </>
  )
}

export default Mainsection