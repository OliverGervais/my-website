import React from 'react'

function Contact() {
    return (
        <>
        <div className=" bg-black rounded-lg xl:mx-56 mt-2 grid grid-flow-col grid-cols-1  gap-2 bg-opacity-90"> 
                                    <ul className=" flex flex-col text-white">
                                        <li className=" mb-8 text-5xl mx-auto font-sans italic text-aqua underline "><p>Contact Me Here</p></li>
                                        <li className="text-3xl mx-auto font-sans"> <p>Phone: (631) 309-1607</p></li>
                                        <li className="text-3xl mx-auto font-sans"><p>Email: oliverg.codes@gmail.com</p></li>
                                        
                                    </ul>
                                </div>
                                <div className=" bg-white rounded-lg  xl:mx-56  mt-2 flex items-end py-4 px-2 justify-center "> 
                               
                                        <a href="https://www.facebook.com/olly.mah.71" target="_blank" rel="noopener noreferrer" ><img className="w-10 sm:w-20 lg:mx-6 mx-2  " src="f_logo_RGB-Blue_114.png" alt="f_logo"/></a>
                                        <a href="https://twitter.com/OliverGervais" target="_blank" rel="noopener noreferrer" ><img className="w-10 sm:w-20  mx-2 lg:mx-6 " src="Twitter social icons - rounded square - blue.png" alt="f_logo"/></a>
                                        <a href="https://www.linkedin.com/in/oliver-gervais-129674208/" target="_blank" rel="noopener noreferrer" ><img className="w-10 sm:w-20 mx-2 lg:mx-6 " src="LI-In-Bug.png" alt="f_logo"/></a>
                                        <a href="https://github.com/OliverGervais" target="_blank" rel="noopener noreferrer" ><img className="w-10 sm:w-20 mx-2 lg:mx-6 " src="GitHub-Mark-120px-plus.png" alt="f_logo"/></a>
                                        
                                </div>
            
        </>
    )
}

export default Contact
