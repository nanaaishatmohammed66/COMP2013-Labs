import type { checkoutCardprops } from "./ThriftHappens";

export default function checkoutCard({
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
  handleRemoveFromCart,
}:checkoutCardprops) {
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

      <p>
        <b>Subtotal</b>: ${(price * quantity).toFixed(2)}
      </p>
      <button onClick={() =>  handleRemoveFromCart(id)}>Remove</button>

      </div>)

     
}