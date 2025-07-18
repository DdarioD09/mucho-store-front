import { Header } from './Header'
import { ProductList } from './ProductList'

export const Home = () => {
    return (
        <div className='mx-1 sm:mx-5 lg:mx-10'>
            <Header />
            <ProductList />
        </div>
    )
}
