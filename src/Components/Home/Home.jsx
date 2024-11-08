import { useEffect } from 'react';
import Banner from '../Header/Banner';
import AllData from '../Outlet/FetchData/AllData';

const Home = () => {
  useEffect(() => {
    document.title = 'Gadget heaven || Home';
  }, []);

  return (
    <div>
      <Banner></Banner>
      <AllData></AllData>
    </div>
  );
};

export default Home;
