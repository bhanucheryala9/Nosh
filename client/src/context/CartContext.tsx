import react, { createContext, useContext, useEffect, useState } from "react";
interface CartContexProps {
 isCartOpen: boolean,
 setIsCartOpen: ()=> void
}
const CartContex = createContext<any>(null);

export const useCart = () => {
  return useContext(CartContex);
};

const CartProvider = (props: {
  children:
    | string
    | number
    | boolean
    | react.ReactElement<any, string | react.JSXElementConstructor<any>>
    | react.ReactFragment
    | react.ReactPortal
    | null
    | undefined;
}) => {
  const [isCartOpen, setIsCartOpen] = useState();
  const [cartData, setCartData] = useState([])

  const value = {
    isCartOpen: isCartOpen,
    setIsCartOpen: setIsCartOpen,
    cartData:cartData,
    setCartData:setCartData
  };

  return (
    <CartContex.Provider value={value as any}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
