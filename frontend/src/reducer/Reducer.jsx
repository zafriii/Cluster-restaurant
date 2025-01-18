const Reducer = (state, action) => {
  switch (action.type) {

    case "GET_FOODS":
      return {
        ...state,
        foods: action.payload,
        filteredFoods: action.payload, 
      };
      
    case "FILTER_FOODS":
      return {
        ...state,
        filteredFoods: action.payload,
      };
    
    case "FILTER_BY_TYPE":
      if (action.payload === "all") {
        return {
          ...state,
          filteredFoods: state.foods, 
        };
      } else {
        const filteredByType = state.foods.filter(
         (food) => food.type === action.payload
       );
      return {
        ...state,
         filteredFoods: filteredByType,
       }}

    // case "ADD_TO_CART" :
    //    return{
    //     ...state,
    //     cart:[...state.cart, action.payload]
    //    }

  //   case "ADD_TO_CART":
  // const newItem = { ...action.payload, quantity: 1 };
  // return {
  //   ...state,
  //   cart: [...state.cart, newItem]
  // };


  // case "ADD_TO_CART":
  // const newItem = action.payload;
  // const existingItemIndex = state.cart.findIndex(item => item.id === newItem.id);

  // if (existingItemIndex !== -1) {
  //   const updatedCart = [...state.cart];
  //   updatedCart[existingItemIndex].quantity += 1;

  //   return {
  //     ...state,
  //     cart: updatedCart
  //   };
  // } else {
  //   const newItemWithQuantity = { ...newItem, quantity: 1 };
  //   return {
  //     ...state,
  //     cart: [...state.cart, newItemWithQuantity]
  //   };
  // }

  case "ADD_TO_CART":
  const newItem = action.payload;
  const existingItemIndex = state.cart.findIndex(item => item.id === newItem.id);

  if (existingItemIndex !== -1) {
    // Item already exists in the cart, update its quantity
    const updatedCart = state.cart.map((item, index) => {
      if (index === existingItemIndex) {
        return { ...item, quantity: item.quantity + 1 }; // Increment quantity by 1
      }
      return item;
    });

    return {
      ...state,
      cart: updatedCart
    };
  } else {
    // Item doesn't exist in the cart, add it
    const newItemWithQuantity = { ...newItem, quantity: 1 };
    return {
      ...state,
      cart: [...state.cart, newItemWithQuantity]
    };
  }
       
    case "REMOVE_ITEM" :
       return{
          ...state,
          cart:state.cart.filter((item) => item.id !== action.payload)
        } 
        
        
        // case "DECREMENT":
        //   let updatedItem = state.cart.map((curElem) => {
        //     if(curElem.id ===  action.payload) {
        //       console.log(curElem)
        //       let decAmount = curElem.quantity - 1;
        //       if(decAmount <= 1 ) {
        //         decAmount = 1;
        //       } 

        //       return{
        //         ...curElem,
        //         quantity: decAmount
        //       }
        //     } else{
        //       return curElem
        //     }
        //   })

        //   return{...state, cart: updatedItem};


        //   case "INCREMENT":
        //   let updatedItem2 = state.cart.map((curElem) => {
        //     if(curElem.id ===  action.payload) {
        //       console.log(curElem)
        //       let incAmount = curElem.quantity + 1;          
        //       return{
        //         ...curElem,
        //         quantity: incAmount
        //       }
        //     } else{
        //       return curElem
        //     }
        //   })

        //   return{...state, cart: updatedItem2};


          case "DECREMENT":
            let updatedItem = state.cart.map((curElem) => {
              if (curElem.id === action.payload) {
                let decAmount = curElem.quantity - 1;
                if (decAmount < 1) {
                  decAmount = 1;
                }

                return {
                  ...curElem,
                  quantity: decAmount
                };
              } else {
                return curElem;
              }
            });

            return { ...state, cart: updatedItem };

          case "INCREMENT":
            let updatedItem2 = state.cart.map((curElem) => {
              if (curElem.id === action.payload) {
                let incAmount = curElem.quantity + 1;
                return {
                  ...curElem,
                  quantity: incAmount
                };
              } else {
                return curElem;
              }
            });

            return { ...state, cart: updatedItem2 };


          case "TOTAL_PRICE" :
              let total_price = state.cart.reduce((inval, cuElem) => {
                let {price, quantity} = cuElem;
                return inval + price * quantity;
              }, 0)

              return{
                ...state,
                total_price
              }


          case "TOTAL_ITEM" :
            let total_item = state.cart.reduce((inval, curElem) =>{
              let {quantity} = curElem;
              return inval + quantity

            },0)  
            
            return{
              ...state,
              total_item
            }


    default:
      return state;
  }
};

export default Reducer;





