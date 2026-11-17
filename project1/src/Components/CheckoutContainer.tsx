import CheckoutCard from "./CheckoutCard";
import type { CheckoutContainerProps } from "./ThriftHappens";

export default function CheckoutContainer({
  checkoutProduct,
  handleRemoveFromCart,
}: CheckoutContainerProps) {
  return (
    <div>
      {checkoutProduct.map((item) => (
        <CheckoutCard
          key={item.id}
          {...item}
    
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
    </div>
  );
}
