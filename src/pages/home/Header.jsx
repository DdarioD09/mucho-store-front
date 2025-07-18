import headerBgImg from '/assets/header-img.jpg';

export const Header = () => {
    return (
        <div
            className='relative h-[80vh] w-full my-8 bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden xl:bg-top'
            style={{ backgroundImage: `url(${headerBgImg})` }}
        >
            <div className="absolute flex flex-col items-start gap-3 sm:gap-4 w-4/5 sm:max-w-6/10 md:max-w-5/10 bottom-1/10 sm:bottom-15/100 left-5/100 sm:left-1/10 p-4 bg-black/20 rounded-2xl text-white">
                <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg">Order your favourite product</h2>
                <p className="text-lg md:text-xl drop-shadow-md">Choose from any of our great products, you won't regret it</p>
                <button className="mt-4 px-6 py-3 bg-gray-400 text-primary rounded-lg font-medium cursor-pointer hover:bg-blue-700 transition-colors shadow-md">
                    View Catalog
                </button>
            </div>
        </div>
    );
}
