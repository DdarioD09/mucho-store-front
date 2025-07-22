import { useContext } from "react"

import { StoreContext } from "../../../context/StoreContext";
import { IconButton } from "../../../components/button/IconButton";
import { StockCounterPill } from "../../../components/StockCounterPill";

export const ProductItem = ({ id, name, description, image, price }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div key={id} className="mb-8 rounded-2xl overflow-hidden shadow-md">
            <div className="relative">
                <img className="w-full" src={image} alt={`image ${name}`} />
                {!cartItems[id]
                    ? <IconButton iconName='add' className="absolute bottom-3 right-3 bg-gray-50 size-12" onClick={() => addToCart(id)} />
                    : <StockCounterPill
                        className="absolute bottom-3 right-3"
                        text={cartItems[id]}
                        onAddClick={() => addToCart(id)}
                        onRemoveClick={() => removeFromCart(id)}
                    />
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
