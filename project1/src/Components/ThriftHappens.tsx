import {
  products as IndexProduct,
  type ClothingProduct,
  type Fit,
  type ClothingCategory,
  type ClothingSize,
} from "../Data/data";
import ItemContainer from "./ItemsContainer";
import { useState } from "react";
import CheckoutContainer from "./CheckoutContainer";

export interface ItemContainerProps {
  products: ClothingProduct[];
  handleAddToCart: (id: number, itemQuantity: number) => void;


}
export interface checkoutCardprops {
  id: number;
  name: string;
  image: string;
  fit: Fit;
  category: ClothingCategory;
  color: string;
  description: string;
  size: ClothingSize;
  price: number;
  quantity: number;
  handleRemoveFromCart: (id: number) => void;

}

export interface CheckoutContainerProps {
  checkoutProduct: checkoutCardprops[];
  handleRemoveFromCart: (id: number) => void;
  handleEmptyCheckout: () => void;
}

export interface ItemCardFunctions extends ClothingProduct {
  handleAddToCart: (id: number, itemQuantity: number) => void;
}

export default function ThriftHappens() {
  // states
  // state to handle the products
  const [products, setProducts] = useState<ClothingProduct[]>(IndexProduct);

  // handle the checkout of items in the cart
  const [checkoutProduct, setCheckoutProducts] = useState<checkoutCardprops[]>(
    [],
  );

  // Handlers
  //1. help add items to cart

  const handleAddToCart = (id: number, itemQuantity: number) => {
  const chooseProduct = products.find((entry) => entry.id === id);

  if (!chooseProduct) return;

  if (itemQuantity <= 0 || itemQuantity > chooseProduct.quantity) return;

  setCheckoutProducts((previous) => [
    ...previous,
    { ...chooseProduct, quantity: itemQuantity },
  ]);

  setProducts((previous) =>
    previous.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity - itemQuantity }
        : item
    )
  );
};


  const handleRemoveFromCart = (id: number) => {
  const removedProduct = checkoutProduct.find(
    (item) => item.id === id
  );

  if (!removedProduct) return;

  setCheckoutProducts((previous) =>
    previous.filter((item) => item.id !== id)
  );

  setProducts((previous) =>
    previous.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + removedProduct.quantity,
          }
        : item
    )
  );
};

const handleEmptyCheckout = () => {
  setProducts((previous) =>
    previous.map((item) => {
      const checkoutItem = checkoutProduct.find(
        (product) => product.id === item.id
      );

      if (!checkoutItem) return item;

      return {
        ...item,
        quantity: item.quantity + checkoutItem.quantity,
      };
    })
  );

  setCheckoutProducts([]);
};

  return (
  <div>
    <h1>ThriftHappens</h1>

    <ItemContainer
      handleAddToCart={handleAddToCart}
      products={products}
    />

  <h1>Cart</h1>
<button onClick={() => handleEmptyCheckout()}>Empty Checkout</button>

    <CheckoutContainer
      checkoutProduct={checkoutProduct}
      handleRemoveFromCart={handleRemoveFromCart}
       handleEmptyCheckout={handleEmptyCheckout}
    />
  </div>
)
};