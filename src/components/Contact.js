import React from 'react'

function Contact() {
    return (
        <>
        <div className=" bg-black rounded-lg md:p-4 mb-2 md:mx-20 lg:mx-36 xl:mx-56 2xl:mx-96 mt-2 grid grid-flow-col grid-cols-1  gap-2 bg-opacity-90"> 
                                    <ul className=" flex flex-col text-white">
                                        <li className=" mb-8 text-5xl mx-auto"><p>Contact Me Here</p></li>
                                        <li className="text-3xl mx-auto"> <p>Phone: (631) 309-1607</p></li>
                                        <li className="text-3xl mx-auto"><p>Email: 6lumah@gmail.com</p></li>
                                        <li className="text-3xl mx-auto"><a href="https://www.facebook.com/olly.mah.71" target="_blank" rel="noopener noreferrer" ><p>facebook</p></a></li>
                                        <li className="text-3xl mx-auto"><a href="https://twitter.com/OliverGervais" target="_blank" rel="noopener noreferrer" ><p>twitter</p></a></li>
                                        <li className="text-3xl mx-auto"><a href="https://www.linkedin.com/in/oliver-gervais-129674208/" target="_blank" rel="noopener noreferrer" ><p>linkedin</p></a></li>
                                        <li className="text-3xl mx-auto"><a href="https://github.com/OliverGervais" target="_blank" rel="noopener noreferrer" ><p>github</p></a></li>
                                    </ul>
                                </div>
            
        </>
    )
}

export default Contact
