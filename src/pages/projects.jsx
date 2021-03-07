import React from "react";
import Nav from "../components/nav"
import PWork from "../components/PWork"
const Projects = () => {
    return (
        <>
       
           <div className=" shadow-2xl bg-black w-sreen">
                <Nav />
                
            </div>
            
                <div className="h-screen "
                style={{ 
                    backgroundImage: `url('techLogo.svg')`,
                    backgroundRepeat  : 'no-repeat',
                    backgroundPosition: 'center',
                    
                    }} >
                        <div className=" bg-black rounded-lg lg:p-4 mb-2  mt-2 grid grid-flow-col grid-cols-1  grid-rows-2 lg:grid-cols-2 sm:grid-rows-1    bg-opacity-90">
                            <PWork/>


                                       
                                        
                                        </div>
                        




                                </div>
            </>
        )
};

export default Projects;