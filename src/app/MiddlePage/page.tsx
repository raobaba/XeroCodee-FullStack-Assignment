"use-client"
import React from 'react';
import '../../styles/MiddlePage.scss'
import NavPage from '../NavPage/page';
import ContentPage from '../ContentPage/page';
import ProgressBar from '../ProgressBar/page';

function MiddlePage() {
  return (
    <div className='middlepage-container'>
       <div className='navpage-container'>
        <NavPage/>
       </div>
       <div className='middle'>
          <div className='contentpage-container'>
            <ContentPage/>
          </div>
          <div className='progressbar-container'>
            <ProgressBar/>
          </div>
       </div>
    </div>
  )
}

export default MiddlePage