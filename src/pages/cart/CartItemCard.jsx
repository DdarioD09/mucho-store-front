import { StockCounterPill } from "../../components/StockCounterPill";

export const CartItemCard = ({ item, quantity, onAddProduct, onRemoveProduct, onDelete }) => {
    return (
        <li className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full py-8 border-y border-gray-300">
            <div className="size-full aspect-square shrink-0">
                <img
                    className="size-full object-cover rounded-md"
                    src={item.image}
                    alt={`${item.name} item in cart`}
                />
            </div>
            <div className=" md:col-span-2 flex flex-col justify-between">
                <div className="block md:flex justify-between">
                    <p className="font-semibold md:text-2xl">{item.name}</p>
                    <p className="text-2xl font-bold text-blue-800">{`$${item.price}`}</p>
                </div>
                <p className="text-sm md:text-lg">{item.description}</p>
                <div>
                </div>
                <div className="hidden mt-2 md:flex items-center justify-around">
                    <StockCounterPill variant="secondary" text={quantity} onAddClick={onAddProduct} onRemoveClick={onRemoveProduct} />
                    <p className="text-red-700 cursor-pointer" onClick={onDelete}>Delete</p>
                </div>
            </div>
            <div className="col-span-2 flex justify-around items-center md:hidden ">
                <StockCounterPill variant="secondary" text={quantity} onAddClick={onAddProduct} onRemoveClick={onRemoveProduct} />
                <p className="text-red-700" onClick={onDelete}>Delete</p>
            </div>
        </li>
    )
}
