import React, { useState } from 'react';
import DropDownProfile from './DropDownProfile';


function Front(){
    const [isActive, setIsActive] = useState(false);
    return(
        <>
       <div className="nav nav_top">
       <div className="menu" >
                   <img onClick={(e)=>setIsActive(!isActive)} src="/menu.png" alt="logo name"/>
            </div>
        <div className="logo">
            <img src="/art.png" alt="logo" />
            </div>
            </div>
            {isActive && <DropDownProfile/>}
            {/* <DropDownProfile/> */}
            <div className="nav_down nav_to">
            <div className='nav_bar'>
            <img src="/home.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/respiration.png" alt="logo "/>
            <img src="/meditation.png" alt="logo"/>
            <img src="/music.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/respiration.png" alt="logo "/>
            <img src="/meditation.png" alt="logo"/>
            <img src="/music.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/meditation.png" alt="logo"/>
            <img src="/music.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/respiration.png" alt="logo "/>
            <img src="/meditation.png" alt="logo"/>
            <img src="/music.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/respiration.png" alt="logo "/>
            <img src="/meditation.png" alt="logo"/>
            <img src="/music.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/meditation.png" alt="logo"/>
            <img src="/music.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/respiration.png" alt="logo "/>
            <img src="/meditation.png" alt="logo"/>
            <img src="/music.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/respiration.png" alt="logo "/>
            <img src="/meditation.png" alt="logo"/>
            <img src="/music.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            <img src="/meditation.png" alt="logo"/>
            <img src="/music.png" alt="logo "/>
            <img src="/yoga.png" alt="logo "/>
            <img src="/activities.png" alt="logo"/>
            <img src="/percentage.png" alt="logo "/>
            </div>
            
            </div>
            {/* <div className="test">
            <div className="test1">
            <img src="/home.png" alt="logo "/>
            </div>
            </div>
            <div className="test3">
            <div className="test2">
            <img src="/respiration.png" alt="logo "/>
            </div>
            </div> */}
            
            <hr></hr>
       
            
            
       
        
        <div className="meditate">
            <img src="/meditate.png"></img>
        </div>
        
        
         </>
    )
}
export default Front;