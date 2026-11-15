import type { checkoutCardprops } from "./ThriftHappens";

interface CheckoutContainerProps {
  checkoutProduct: checkoutCardprops[];
  handleRemoveFromCart: (id: number) => void;
}

export default function CheckoutContainer({
  checkoutProduct,
  handleRemoveFromCart,
}: CheckoutContainerProps) {
  return (
    <div>
      <b><h1>Checkout</h1></b>

      {checkoutProduct.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: {item.price}</p>

          <button onClick={() => handleRemoveFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}