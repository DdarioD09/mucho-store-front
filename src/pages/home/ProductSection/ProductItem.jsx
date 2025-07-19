import { useContext } from "react"

import { StoreContext } from "../../../context/StoreContext";
import { StockCounterButton } from "../../../components/StockCounterButton";

export const ProductItem = ({ id, name, description, image, price }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div key={id} className="mb-8 rounded-2xl overflow-hidden shadow-md">
            <div className="relative">
                <img className="w-full" src={image} alt={`image ${name}`} />
                {!cartItems[id]
                    ? <StockCounterButton iconName='add' className="absolute bottom-3 right-3 bg-gray-50" onCounterClick={() => addToCart(id)} />
                    : <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-gray-50 rounded-full">
                        <StockCounterButton iconName='remove' iconColor="white" className="bg-red-500" onCounterClick={() => removeFromCart(id)} />
                        <span>{cartItems[id]}</span>
                        <StockCounterButton iconName='add' iconColor="white" className="bg-green-500" onCounterClick={() => addToCart(id)} />
                    </div>
                }
            </div>
            <div className="p-5">
                <p className="text-lg font-medium">{name}</p>
                <p className="text-gray-500 text-sm">{description}</p>
                <p className="my-2.5 text-cyan-700 text-2xl font-medium">{price}</p>
            </div>
        </div>
    )
}
