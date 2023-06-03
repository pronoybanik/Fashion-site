
const ProductImage = () => {
    return (
        <section >
            <div className="max-w-screen-xl px-4  mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        New Collection
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                        natus?
                    </p>
                </header>

                <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                    <li >
                        <div className="relative block group">
                            <img
                                src="https://images.pexels.com/photos/2059104/pexels-photo-2059104.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="relative block group">
                            <img
                                src="https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </div>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
                        <div className="relative block group">
                            <img
                                src="https://images.pexels.com/photos/2816479/pexels-photo-2816479.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                            />

                            <div
                                className="absolute inset-0 flex flex-col items-start justify-end p-6"
                            >
                                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Shop Now
                                </span>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default ProductImage;