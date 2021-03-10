import React from 'react'
import { useSpring, animated } from 'react-spring'

function Profile() {

    
    const props = useSpring({opacity: 1, marginTop: 0, from: {opacity: 0, marginTop: -500 } ,config:{duration: 1000} })
    return (
        <>
        <animated.div style={props}>

                     <div className="mt-8 text-white bg-black rounded-lg p-4 mb-2  lg:mx-36 mt-2 grid grid-flow-col grid-cols-2 sm:grid-cols-3 gap-2 grid-rows-1 bg-opacity-90"> 
                        <div className=" mx-auto my-auto col-start-2   row-start-1"><img className="  col-start-2 row-start-1" src="Myname.svg" alt="Oliver Gervais pic"/></div>
                        <img className="w-64  col-start-1 row-start-1 rounded-lg" src="Oliver.jpg" alt="Oliver Gervais pic"/>
                        </div>

        </animated.div>
       
            
        </>
    )
}

export default Profile
