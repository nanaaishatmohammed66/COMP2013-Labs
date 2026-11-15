import { useState } from "react";
import type { ItemCardFunctions } from "./ThriftHappens";
export default function ItemCard({
  id,
  name,
  image,
  fit,
  category,
  color,
  description,
  size,
  price,
  quantity,
  handleAddToCart,
}:ItemCardFunctions) {
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  return (
    <div className="ItemCard">
      <p>{name}</p>
      <img src={image} alt="" width="150px" />
      <p>fit:{fit}</p>
      <p>Category:{category}</p>
      <p>color:{color}</p>
      <p>description:{description}</p>
      <p>size:{size}</p>
      <p>price:{price}</p>
      <b>
        {" "}
        <p>Quantity:{quantity}</p>
      </b>

      <button
        onClick={() =>
          setItemQuantity((itemQuantity) =>
            Math.min(Math.max(itemQuantity - 1, 0), quantity),
          )
        }
      >
        -
      </button>
      <p>{itemQuantity}</p>
      <button
        onClick={() =>
          setItemQuantity((itemQuantity) =>
            Math.min(Math.max(itemQuantity + 1, 0), quantity),
          )
        }
      >
        +
      </button>
      <br />
      <button onClick={() => handleAddToCart(id, itemQuantity)}>
  Add to cart
</button>
    </div>
  );
}
