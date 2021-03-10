import Nav from "../components/nav"


import Profile from '../components/Profile'
import WorkEthic from '../components/WorkEthic'
import Skills from '../components/Skills'
import React from 'react'
import {useSpring, animated} from 'react-spring'







function MainPage() {
    const props1 = useSpring({opacity: 1, marginRight: 0, from: {opacity: 0, marginRight: -500 } ,delay:1250 ,config:{duration: 1000} })

    
  


    return (
        <>
        
       


      
            <div className="shadow-2xl bg-black w-sreen">
            <animated.div style={props1}>
                <Nav/>
                </animated.div>
                </div>

                <div className="h-screen bg-white "
                style={{ 
                    backgroundImage: `url('techLogo.svg')`,
                    backgroundRepeat  : 'no-repeat',
                    backgroundPosition: 'center',
                    
                    }} >

                         

                        <Profile/>

                        
                        
                        <WorkEthic/>
                        <Skills/>

                        

                                    
                                    
                        
                                    
                                </div>
                                
            </>
    )
};
export default MainPage;
