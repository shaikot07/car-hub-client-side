
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Sheard/Banner';
import BrandCart from './BrandCart';
import PreOrder from '../../Sheard/PreOrder';
import TestyMoniyel from '../../Sheard/TestyMoniyel';

const Home = () => {
      const data = useLoaderData()
      // console.log(data);
      return (
            <div>
                  <Banner></Banner>
                  <div className='max-w-6xl sm:mx-28 md:mx-auto mt-11'>


                        <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-[50px] gap-6'>
                              {
                                    data.map(cdata => <BrandCart key={cdata.id} cdata={cdata}></BrandCart>)
                              }
                        </div>
                        {/* pre Booking section */}
                        <div className=''>
                              <div className='mt-20 mb-10'>
                                    <PreOrder></PreOrder>

                              </div>
                              <div className='mt-40 mb-20'>
                                    <div className='mb-20'><h2 className='text-4xl font bold text-pink-600 text-center mb-4  '>Our Clint Feedback</h2>
                                          <hr className='border border-pink-700 w-[320px] mx-auto' /></div>
                                    <TestyMoniyel></TestyMoniyel>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Home;