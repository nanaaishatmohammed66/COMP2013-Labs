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
}: ItemCardFunctions) {
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
        disabled={quantity === 0}
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
        disabled={quantity === 0}
        onClick={() =>
          setItemQuantity((itemQuantity) =>
            Math.min(Math.max(itemQuantity + 1, 0), quantity),
          )
        }
      >
        +
      </button>
      <br />
      <button
        disabled={quantity === 0 || itemQuantity === 0}
        onClick={() => {
          handleAddToCart(id, itemQuantity);
          setItemQuantity(0);
        }}
      >
        Add to cart
      </button>
      <h3>{quantity === 0 && "Out of stock"}</h3>
    </div>
  );
}
