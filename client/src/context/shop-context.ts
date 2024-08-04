import { createContext, useState } from "react"; 

export interface IShopContext {
  addToCart: (itemId: string) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItemCount: (newAmount: number, itemId: string) => void;
}

const defaultVal: IShopContext = {
  addToCart: () => null,
  removeFromCart: () => null,
  updateCartItemCount: () => null,
};

export const ShopContext = createContext<IShopContext>(defaultVal);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState<{ string: number } | {}>({});

  const addToCart = (itemId: string) => {};

  const removeFromCart = (itemId: string) => {};
  const updateCartItemCount = (newAmount: number, itemId: string) => {};
  const contextValue: IShopContext = {
    addToCart,
    removeFromCart,
    updateCartItemCount
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
