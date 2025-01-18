import React from 'react'
import './hersection.css'
import { GiChickenOven } from "react-icons/gi";
import { MdOutlineOtherHouses } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { GiPartyPopper } from "react-icons/gi";

function Herosection() {
  return (

    <>

        <div className="hero-main">

          <img src='images/resturantnew.jpg'></img>

          
          <div className="hero-main-text">

            <h3>About Us</h3>

          <p>Welcome to Cluster, where culinary excellence meets warm hospitality.
            Nestled in the heart of Nayasarak, Sylhet our restaurant offers a 
            dining experience that tantalizes the taste buds and soothes the soul.
            At Cluster, we pride ourselves on crafting dishes that showcase the finest ingredients 
            sourced locally and globally. Every dish is a masterpiece, carefully curated by our 
            talented chefs who infuse creativity and passion into each recipe.</p>

            <h4 className='location'>Location : Nayasarak, Sylhet</h4>
            <h4 className='dinein'>Dine in time : 11 am - 11 pm</h4>
            <h4 className='dinein'>Home delivery - Available (Inside Sylhet town)</h4>

        </div>
        </div>


        <div className="chef">

          <div className="chef-text">

          <h3>Our Chief Chef "Chef Ali Ahmed"</h3>
          <p>Presents you the most awesome dishes</p>

          </div>

          <div className="chef-image">
            <img src='/images/chef.jpg'></img>
          </div>
        

        </div>


        <div className="cluster-special">       

            <img src='/images/foodres.jpg'></img>

            <div className="cluster-special-text">       


            <h2>Our Signature Dish <span>"CLUSTER SPECIAL"</span></h2>

            <p>Indulge in our signature dish, the succulent "Sizzling Steak Surprise," 
              expertly grilled to perfection and bursting with robust flavors. 
              Each bite unveils a symphony of tantalizing spices and tender juiciness, leaving an unforgettable impression on your palate. Savor the essence of
               culinary excellence with every savory slice, making it a must-try highlight 
               of your dining experience at our restaurant.</p>

        </div>
        </div>


        <div className="strength">

                <h3>Our strength</h3>

              <div className="strength-container">
                
                      <div className="strength-card">

                            <GiChickenOven className='icon'/>

                          <h4>Hygienic food</h4>

                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                      </div>

                      <div className="strength-card">

                           <MdOutlineOtherHouses className='icon'/>

                          <h4>Fresh Environment</h4>

                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>


                      </div>

                      <div className="strength-card">

                              <LuChefHat className='icon'/>

                          <h4>Skilled Chefs</h4>

                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>


                      </div>

                      <div className="strength-card">

                              <GiPartyPopper className='icon'/>

                          <h4>Events & parties</h4>

                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>


                      </div>
                
              </div>  


        </div>



    </>
  )
}

export default Herosection