

const StyleEstProduct = () => {







    return (
        <div>

            <section>
                <div className="max-w-screen-xl px-4 mb-4 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid p-6 bg-gray-200 rounded place-content-center sm:p-8">
                            <div className="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Elements of style</h2>

                                    <p className="mt-4 text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                                        rerum quam amet provident nulla error!
                                    </p>
                                </header>

                                <a
                                    href="#"
                                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                >
                                    Shop All
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-3 gap-4">
                                <li>
                                    <div className="block group">
                                        <img
                                            src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Simple Watch
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">$150</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="block group">
                                        <img
                                            src="https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Simple Watch
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">$150</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="block group">
                                        <img
                                            src="https://images.pexels.com/photos/3772506/pexels-photo-3772506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt=""
                                            className="object-cover w-full rounded aspect-square"
                                        />

                                        <div className="mt-3">
                                            <h3
                                                className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Simple Watch
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-700">$150</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default StyleEstProduct;