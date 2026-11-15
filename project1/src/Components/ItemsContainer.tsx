import ItemCard from "./ItemCard";
import type { ItemContainerProps } from "./ThriftHappens";


export default function ItemContainer({ products,handleAddToCart }: ItemContainerProps) {
  return (
    <div>
      {products.map((item) => (
        <ItemCard key={item.id} handleAddToCart={ handleAddToCart} {...item} />
      ))}
    </div>
  );
}
