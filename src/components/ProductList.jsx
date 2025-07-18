import { useState } from "react";

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Focus Card Tray',
        href: '#',
        price: '$64',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        id: 6,
        name: 'Focus Multi-Pack',
        href: '#',
        price: '$39',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg',
        imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
    },
    {
        id: 7,
        name: 'Brass Scissors',
        href: '#',
        price: '$50',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg',
        imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
    },
    {
        id: 8,
        name: 'Focus Carry Pouch',
        href: '#',
        price: '$32',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg',
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
];

export const ProductList = () => {
    const [cartItems, setCartItems] = useState({});

    function handleCart(productId) {
        setCartItems({ ...cartItems, productId: products[productId] })
    }

    return (
        // add black verion
        <div className="m-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <div key={product.id} className="mb-8 rounded-2xl overflow-hidden shadow-md">
                    <img src={product.imageSrc} alt={product.alt} />
                    {!cartItems
                        ? <img className="add" onClick={() => handleCart(product.id)} />
                        : <img className="add" onClick={() => handleCart(product.id)} />
                    }
                    <div className="p-5">
                        <p className="text-lg font-medium">{product.name}</p>
                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti harum qui excepturi numquam nemo corporis, hic, facilis praesentium debitis nesciunt a modi vel veniam voluptates architecto? Facilis unde magnam nemo.</p>
                        <p className="my-2.5 text-cyan-700 text-2xl font-medium">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
