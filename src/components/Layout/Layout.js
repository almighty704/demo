import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.scss';
const Layout = props => {
  return (
    <>
      <header className='header '>
        <Navbar />
      </header>
      <main className='container-max'>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
