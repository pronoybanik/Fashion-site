import { BsCarFrontFill } from 'react-icons/bs';
import { CiMoneyBill } from 'react-icons/ci'
import { MdOutlinePayments, MdSecurity } from 'react-icons/md'

const Service = () => {
    return (
        <section className='flex justify-center'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mt-24">
                <div >
                    <div

                        className="relative block lg:h-[290px]  rounded-sm w-96 border  p-4 shadow-xl  lg:p-8 sm:w-full"
                    >
                        <div className='flex justify-center mt-12'>
                            <div className="flex justify-center items-center gap-4 bg-gray-300 w-20 h-20 rounded-full p-6">

                                <BsCarFrontFill style={{ fontSize: '300', color: '#2E8B57' }}></BsCarFrontFill>
                            </div>
                        </div>

                        <p className="mt-4 font-semibold text-lg text-black text-center ">
                            Super Fast and  free  <br /> delivery
                        </p>
                    </div>
                </div>

                <div>
                    <div

                        className="relative block rounded-sm w-96 border   p-4 shadow-xl sm:p-6 lg:p-8"
                    >
                        <div className='flex justify-start '>
                            <div className="flex justify-center items-center gap-4 bg-gray-300 w-20 h-20 rounded-full p-6">
                                <MdSecurity style={{ fontSize: '400px', color: '#2E8B57' }}></MdSecurity>
                            </div>
                            <p className="mt-2 ml-3   font-semibold text-lg text-black text-center ">
                                Non- contact <br />
                                shipping
                            </p>
                        </div>


                    </div>
                    <div

                        className="relative block rounded-sm w-96 border   p-4 shadow-xl sm:p-6 lg:p-8"
                    >
                        <div className='flex justify-start  '>
                            <div className="flex justify-center items-center gap-4 bg-gray-300 w-20 h-20 rounded-full p-6">
                                <CiMoneyBill style={{ fontSize: '500px', color: '#2E8B57' }}></CiMoneyBill>
                            </div>
                            <p className="mt-3 ml-4  font-semibold text-lg text-black text-center ">
                                Money-back <br /> Guaranteed
                            </p>
                        </div>


                    </div>

                </div>

                <div>
                    <div >
                        <div

                            className=" relative block lg:h-[290px]     rounded-sm w-96 border  p-4 shadow-xl  lg:p-8"
                        >
                            <div className='flex justify-center mt-12'>
                                <div className="flex justify-center items-center gap-4 bg-gray-300 w-20 h-20 rounded-full p-6">
                                    <MdOutlinePayments style={{ fontSize: '300', color: '#2E8B57' }}></MdOutlinePayments>
                                </div>
                            </div>

                            <p className="mt-4 font-semibold text-lg text-black text-center ">
                                super secure payment <br /> system
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;