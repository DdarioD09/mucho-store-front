import { useContext } from "react";

import { ProductItem } from "./ProductItem";
import { StoreContext } from "../../../context/StoreContext";

export const ProductList = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="m-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {food_list.map((product) => {
                if (category === 'All' || category === product.category) {
                    return <ProductItem
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                    />
                }
            })}
        </div>
    )
}
