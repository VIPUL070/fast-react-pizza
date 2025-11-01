import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../cart/cartSlice";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id , name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function addToCart(){
    const newItem = {
      pizzaId : id,
      name,
      quantity : 1,
      unitPrice,
      totalPrice : unitPrice*1,
    };
    dispatch(addItem(newItem));
    navigate('/cart');
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medim">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}
          {!soldOut && <Button type="small" onClick={addToCart}>Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
