import { menu_list } from '../../../assets/assets';

export const Category = ({ category, onClickCategory }) => {

    function handleCategorySelection(name) {
        onClickCategory(prev => prev === name ? 'All' : name);
    }

    return (
        <div className="flex flex-col gap-5" id='explore-category'>
            <h1 className="text-2xl font-medium">Explore our products</h1>
            <p className="max-w-4/5 text-gray-700">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="
                flex justify-between gap-6 py-4 overflow-x-auto scroll-smooth 
                [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-gray-300
                [&::-webkit-scrollbar-track]:bg-gray-100 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 pb-6"
            >
                {menu_list.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            px-6 py-3 text-center bg-gray-200 rounded-lg border border-gray-300 hover:bg-white transition-all cursor-pointer
                            ${category === item.menu_name ? 'bg-white border-2' : ''}
                        `}
                        onClick={() => handleCategorySelection(item.menu_name)}
                    >
                        <img className='w-[7.5vw] min-w-24 rounded-full' src={item.menu_image} alt={`category ${item.menu_name}`} />
                        <p className='mt-2 lg:text-2xl' >{item.menu_name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}