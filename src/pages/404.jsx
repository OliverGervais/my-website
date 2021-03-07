import React from "react";
import Nav from "../components/nav"
import Lost from "../components/Lost"
const NotFound = () => {
    return (
        <>
       
            <div className="shadow-2xl bg-black w-sreen">
                <Nav/>
                </div>

                <div className="h-screen bg-white "
                style={{ 
                    backgroundImage: `url('techLogo.svg')`,
                    backgroundRepeat  : 'no-repeat',
                    backgroundPosition: 'center',
                    
                    }} >
                        <Lost/>
                        
                                    
                                </div>
                




                
                           
                                
    
                                    
    
                            
    
                                    
                                    
                            
                
                
            </>
        )
};

export default NotFound;