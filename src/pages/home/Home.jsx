import { Header } from './Header'
import { ProductSection } from './ProductSection/ProductSection'

export const Home = () => {
    return (
        <div className='mx-1 sm:mx-5 lg:mx-10'>
            <Header />
            <ProductSection />
        </div>
    )
}
