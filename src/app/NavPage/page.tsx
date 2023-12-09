
import React from 'react';
import '../../styles/NavPage.scss';
import { BsToggle2Off } from "react-icons/bs";

function NavPage() {
  return (
    <div className='NavPage'>
      <div className="NavPage-Content">
          <div className='greet'>
            <h1>Hi Arya !</h1>
            <p>Welcome to XeroCodee Ecosystem 😎</p>
          </div>
          <div className='toggle'>
            <span>Test Mode</span>
            <BsToggle2Off size={24}/>
             <span>Production Mode</span>
          </div>
      </div>
    </div>
  )
}

export default NavPage