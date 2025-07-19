import { useState } from "react"
import { Category } from "./Category";
import { ProductList } from "./ProductList";

export const ProductSection = () => {
    const [category, setCategory] = useState('All');

    return (
        <>
            <Category category={category} onClickCategory={setCategory} />
            <ProductList category={category} />
        </>
    );
}
