import React from "react";
import Nav from "../components/nav"
import Contact from "../components/Contact"
import {useSpring, animated} from 'react-spring'



const ContactMe = () => {

    const props1 = useSpring({opacity: 1, marginRight: 0, from: {opacity: 0, marginRight: -500 } ,delay:1000 ,config:{duration: 1000} })


    return (
        <>
        <div className=" shadow-2xl bg-black w-sreen">
        <animated.div style={props1}>
                <Nav />
                </animated.div>    
            </div>
                <div className="h-screen "
                style={{ 
                    backgroundImage: `url('techLogo.svg')`,
                    backgroundRepeat  : 'no-repeat',
                    backgroundPosition: 'center',
                    
                    }} >
                        <Contact/>

                        
            </div>
            </>
        )
};

export default ContactMe;