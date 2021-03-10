import React from 'react'
import {useSpring, animated} from 'react-spring'
import EthicMini from './EthicMini'

function WorkEthic() {
    const propsmain = useSpring({opacity: 1, marginLeft: 0, from: {opacity: 0, marginLeft: -500 } ,delay:1250 ,config:{duration: 1000} })
    

    return (
        <>
        <animated.div style={propsmain}>
        <div className="text-white bg-black rounded-lg md:p-4 mb-2  lg:mx-36   mt-2 grid grid-flow-col grid-cols-2  sm:grid-cols-5  sm:grid-rows-1  sm:gap-2 bg-opacity-90"> 
        
        <EthicMini/>
        
                        

                                    
                                    </div>
                                    </animated.div>
            
        </>
    )
}

export default WorkEthic
