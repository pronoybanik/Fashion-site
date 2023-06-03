
const Title = () => {
    return (
        <section className="max-w-screen-lg mx-auto lg:-mt-12 -mt-6 mb-10">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">

            <div className="col-span-2 ">
                <h1 className="lg:text-8xl text-5xl font-bold font-serif ">wear the  </h1>
                <div className="flex gap-2">
                    <h2 className="lg:text-8xl text-5xl font-bold font-serif ">best.</h2>
                    <h3 className="lg:w-42 lg:text-sm text-xs text-justify mr-2 lg:mt-1  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, enim nulla impedit laudantium sapiente voluptatum facilis repudiandae cupiditate voluptatibus velit, officia assumenda optio! Minus voluptates rem recusandae? Nisi expedita, amet voluptate dolor in nam, voluptates, ab ullam similique facilis adipisci!</h3>
                </div>
            </div>

            <div className="ml-4">


                <div
                    className="relative flex h-32 bg-[#2F4F4F] mb-1 items-start justify-between    p-4 shadow-xl sm:p-6 lg:p-8"

                >
                    <div className="flex items-center  pt-4 text-gray-500">


                        <h3 className=" text-lg font-serif uppercase font-semibold text-white sm:text-xl">
                            shop now
                        </h3>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 ml-20 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>
                        </div>


                    </div>


                </div>

                <div
                    className="relative flex h-32 bg-[#000000] mb-1 items-start justify-between   p-4 shadow-xl  lg:p-8"

                >
                    <div className="flex items-center   pt-4 text-gray-500">


                        <h3 className=" text-lg font-serif uppercase font-semibold text-white ">
                            see promo
                        </h3>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 ml-20 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>
                        </div>


                    </div>


                </div>

            </div>

        </div>

    </section>
    );
};

export default Title;