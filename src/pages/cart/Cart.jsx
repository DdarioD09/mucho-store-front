import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { CartItemCard } from "./CartItemCard";

export const Cart = () => {
    const { food_list, cartItems, addToCart, removeFromCart, deleteFromCart, getTotalCartAmount } = useContext(StoreContext);

    const subTotal = getTotalCartAmount();
    const tax = subTotal * 0.06;
    const shipping = 10;

    return (
        <div className="h-[calc(100vh-68px)] p-6">
            <h1 className='text-3xl font-bold mb-6'>Shopping cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 md:h-[calc(100%-40px)]">
                <section className="order-2 md:col-span-2 md:order-1 bg-white h-full overflow-y-auto" id='product list'>
                    <h2 className="text-xl font-semibold hidden">Title product list</h2>
                    <ul className="mx-8">
                        {food_list.map(item => {
                            if (cartItems[item._id] > 0) {
                                return (
                                    <CartItemCard
                                        key={item._id}
                                        item={item} quantity={cartItems[item._id]}
                                        onAddProduct={() => addToCart(item._id)}
                                        onRemoveProduct={() => removeFromCart(item._id)}
                                        onDelete={() => deleteFromCart(item._id)}
                                    />
                                )
                            }
                        })}
                    </ul>
                </section>
                <section className="bg-gray-100 p-7 rounded-md h-fit order-1 md:order-2">
                    <h2 className="text-xl font-medium">Order summary</h2>
                    <dl className="mt-5">
                        <div className="flex justify-between mb-3">
                            <dt className="text-sm">Subtotal</dt>
                            <dd className="text-sm font-medium">{subTotal}</dd>
                        </div>
                        <div className="flex justify-between mb-3 pt-3 border-t border-gray-300">
                            <dt className="text-sm">Shipping</dt>
                            <dd className="text-sm font-medium">{`$${shipping}`}</dd>
                        </div>
                        <div className="flex justify-between mb-3 pt-3 border-t border-gray-300">
                            <dt className="text-sm">Tax</dt>
                            <dd className="text-sm font-medium">{`$${tax}`}</dd>
                        </div>
                        <div className="flex justify-between pt-3 border-t border-gray-300">
                            <dt className="font-medium">Order total</dt>
                            <dd className="font-medium">{`$${subTotal + shipping + tax}`}</dd>
                        </div>
                    </dl>
                    <div className="mt-6 text-center">
                        <button className="bg-blue-600 hover:bg-blue-800 w-full py-3 rounded-lg text-white transition-colors cursor-pointer">
                            Proced to payment
                        </button>
                    </div>
                </section>
            </div>
        </div>

    )
}
