import React from 'react';
import '../../styles/DashPage.scss'
import Header from '../Header/page';
import SideBar from '../SideBar/page';
import MiddlePage from '../MiddlePage/page';
import XeroCodePage from './[xerocodee]/page';

function DashPage() {
  return (
    <div className='dashboard-container'>
        <div className='header-container'>
            <Header/>
        </div>
        <div className='flex'>
          <div className='sidebar-container'>
             <SideBar/>
          </div>
          <div className='home-container'>
            <XeroCodePage/>
          </div>
        </div>
    </div>
  )
}

export default DashPage