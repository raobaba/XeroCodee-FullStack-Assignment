import React from 'react';
import Navbar from './Navbar';
import Suggestion from '../pages/Suggestion';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Suggestion/>
      <Footer/>
     </div>
  );
};

export default Home;


