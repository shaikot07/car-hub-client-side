
import { Outlet } from 'react-router-dom';
import Navebar from '../Sheard/Navebar';
import Footer from '../Sheard/Footer';

const Root = () => {
      return (
            <div>
                  <div className='max-w-6xl mx-auto'><Navebar></Navebar> </div>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Root;