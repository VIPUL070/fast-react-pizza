import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import EmptyCart from './EmptyCart';

function Cart() {
  const username = useSelector((store) => store.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  
  if(cart.length === 0) return <EmptyCart />
  
  return (
    <div className="px-5 py-8">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
          
          <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
          <ul className="divide-y divide-stone-400 border-b border-stone-400">
            {cart.map((item) => {
              return <CartItem item={item} key={item.pizzaId}></CartItem>;
            })}
          </ul>
          <div className="mt-7 space-x-2">
            <Button type="primary" to="/order/new">
              Order pizzas
            </Button>
            <Button type="secondary" onClick={() => dispatch(clearCart())}>Clear cart</Button>
          </div>
    </div>
  );
}

export default Cart;
