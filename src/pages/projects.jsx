import React from "react";
import Nav from "../components/nav"
import PWork from "../components/PWork"
import {useSpring, animated} from 'react-spring'

const Projects = () => {
    const props = useSpring({opacity: 1, marginTop: 0, from: {opacity: 0, marginTop: -500 } ,delay:0 ,config:{duration: 1000} })
    const props1 = useSpring({opacity: 1, marginRight: 0, from: {opacity: 0, marginRight: -500 } ,delay:1000 ,config:{duration: 1000} })

    return (
        <>
        
           <div className=" shadow-2xl bg-black w-sreen">
           <animated.div style={props1}>
                <Nav />
                </animated.div>
                
            </div>
            <animated.div style={props}>
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
                                </animated.div>
            </>
        )
};

export default Projects;