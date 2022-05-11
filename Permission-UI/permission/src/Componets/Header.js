import React from "react";
import permission from './Images/login.png';

export const Header =() =>{
    return(
        
            <nav className='navbar bg-primary'>
                <img src={permission} alt={permission} className="round-img"/> 
                  <h1>
                  
                      Permission Manager
                  </h1>
                  
              </nav>
        );
}