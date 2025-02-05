import React from 'react';
import Navbar from '../../sheare/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../sheare/Footer';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
          
          <Outlet></Outlet>
         
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;