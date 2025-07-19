import { useRef } from 'react'
import { Header } from './Header'
import { ProductSection } from './ProductSection/ProductSection'

export const Home = () => {
    const productSectionRef = useRef(null);

    function scrollToProducts() {
        const offset = 100;
        const elementPosition = productSectionRef.current.offsetTop - offset;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }

    return (
        <div className='mx-2 sm:mx-5 lg:mx-10'>
            <Header scrollToProducts={scrollToProducts} />
            <div ref={productSectionRef}>
                <ProductSection />
            </div>
        </div>
    )
}
