
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Sheard/Banner';
import BrandCart from './BrandCart';

const Home = () => {
      const data = useLoaderData()
      console.log(data);
      return (
            <div> 
                  <Banner></Banner>
                  <div className='max-w-6xl mx-auto mt-11'>
                       
                        
                        <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-[50px]'>
                              {
                                    data.map(cdata => <BrandCart key={cdata.id} cdata={cdata}></BrandCart>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Home;