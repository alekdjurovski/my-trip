import React from 'react';
import Places from '../places/Places';
import Sidebar from './Sidebar';

const LandingPage = () => {

        return (
            <div className='row'>
                <div className="col-md-10">
                <Places></Places>
                </div>
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                
                <h1>Landing Page</h1>
            </div>
        );
    
    
}

export default LandingPage;
  