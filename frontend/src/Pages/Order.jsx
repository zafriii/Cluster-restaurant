import React from 'react'
import '../components/order.css'

function Order() {
  return (

    <>
    <div className='order'>

     <h2 className='thanks'>Thanks for the Order</h2>
     <h2 className='meal'>Your meal is on the way!  <span className='mins'> within 45 mins </span></h2> 
     <h3 className='payment'>Payment : Cash On Delivery</h3> 
     <h3 className='visit'>Whenever you get time please visit our resturant. We'll have pleasure to serve you.</h3>

    </div>

    </>
  )
}

export default Order