import React from 'react';

const PreOrder = () => {
      return (
            <div>
                  <div className='mb-20'><h2 className='text-4xl font bold text-pink-600 text-center mb-4  '>Up Coming Models</h2>
                  <hr className='border border-pink-700 w-[320px] mx-auto' /></div>
                  <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-8'>
                        <div className="relative grid h-[300px] w-full max-w-[320px] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/2sVHkHK/latest-02.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                              </div>
                              <div className="relative p-6 px-6 py-14 md:px-12">
                                    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    Pre Order Is Running...!
                                    </h2>
                                    
                              </div>
                        </div>
                        <div className="relative grid h-[300px] w-full max-w-[320px] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/m0tMThk/latest-01.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                              </div>
                              <div className="relative p-6 px-6 py-14 md:px-12">
                                    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    Pre Order Is Running...!
                                    </h2>
                                    
                              </div>
                        </div>
                        <div className="relative grid h-[300px] w-full max-w-[320px] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/3TTD4N1/latest-03.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                              </div>
                              <div className="relative p-6 px-6 py-14 md:px-12">
                                    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                    Pre Order Is Running...!
                                    </h2>
                                    
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default PreOrder;