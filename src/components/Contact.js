import React from 'react'
import {useSpring, animated} from 'react-spring'

function Contact() {
    const props = useSpring({opacity: 1,marginTop: 0, from: {opacity: 0, marginTop: -600 } ,delay:0 ,config:{duration: 1000} })
    return (
        <>
        <animated.div style={props}>
        <div className=" bg-black rounded-lg xl:mx-56 mt-2  bg-opacity-90"> 
                                    <ul className=" flex flex-col text-white">
                                         <a href="https://www.upwork.com/freelancers/~0142573914a4269a10" target="_blank" rel="noopener noreferrer" ><li className="text-center mb-8 text-3xl sm:text-5xl mx-auto font-sans italic text-aqua underline "><p>Contact Me Here</p></li></a>
                                      
                                        
                                    </ul>
                                </div>
                                
                                </animated.div>
            
        </>
    )
}

export default Contact
