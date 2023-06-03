

const CategoryProduct = () => {
    return (
        <section >
            <div className="flex  justify-center  mt-32">
                <div className="grid  grid-cols-4 my-12 mr-2">

                    <button className=" ml-2 py-1 bg-orange-600 text-white  rounded-full lg:px-12 px-2  border-gray-600">All category</button>
                    <button className="border ml-2 py-1 rounded-full lg:px-12 px-2 border-gray-600">Men product</button>
                    <button className="border ml-2 py-1 rounded-full lg:px-12 px-2 border-gray-600">women product</button>
                    <button className="border ml-2 py-1 rounded-full lg:px-12 px-2 border-gray-600">Accesories</button>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:mx-80 mx-4 mb-28">
                <div className="block group">
                    <img
                        src="https://media.istockphoto.com/id/1094041816/photo/male-tying-snickers-close-up.jpg?b=1&s=612x612&w=0&k=20&c=rSaZM8oUmHzvS-7xurRKOfKhenH5mlxxJ2Mqfg9g1_0="
                        alt=""
                        className="h-[250px] w-full object-cover sm:h-[450px]"
                    />

                    <div className="mt-3">
                        <h3
                            className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                            Small Headphones
                        </h3>

                        <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                            $150
                        </p>
                    </div>
                </div>

                <div className="block group">
                    <img
                        src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        className="h-[350px] w-full object-cover sm:h-[450px]"
                    />

                    <div className="mt-3">
                        <h3
                            className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                            Small Headphones
                        </h3>

                        <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                            $150
                        </p>
                    </div>
                </div>

                <div className="block group">
                    <img
                        src="https://images.pexels.com/photos/1195548/pexels-photo-1195548.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        className="h-[350px] w-full object-cover sm:h-[450px]"
                    />

                    <div className="mt-3">
                        <h3
                            className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                            Small Headphones
                        </h3>

                        <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                            $150
                        </p>
                    </div>
                </div>

                <div className="block group">
                    <img
                        src="https://images.pexels.com/photos/5395183/pexels-photo-5395183.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                        className="h-[350px] w-full object-cover sm:h-[450px]"
                    />

                    <div className="mt-3">
                        <h3
                            className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                            Small Headphones
                        </h3>

                        <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                            $150
                        </p>
                    </div>
                </div>

                <div className="block group">
                    <img
                        src="https://images.pexels.com/photos/6347536/pexels-photo-6347536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="h-[350px] w-full object-cover sm:h-[450px]"
                    />

                    <div className="mt-3">
                        <h3
                            className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                            Small Headphones
                        </h3>

                        <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                            $150
                        </p>
                    </div>
                </div>

                <div className="block group">
                    <img
                        src="https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        className="h-[350px] w-full object-cover sm:h-[450px]"
                    />

                    <div className="mt-3">
                        <h3
                            className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                            Small Headphones
                        </h3>

                        <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                            $150
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CategoryProduct;