import React from 'react'

function Contact() {
    return (
        <>
        <div className=" bg-black rounded-lg md:p-4 mb-2 md:mx-20 lg:mx-36 xl:mx-56 2xl:mx-96 mt-2 grid grid-flow-col grid-cols-1  gap-2 bg-opacity-90"> 
                                    <ul className=" flex flex-col text-white">
                                        <li className=" mb-8 text-5xl mx-auto"><p>Contact Me Here</p></li>
                                        <li className="text-3xl mx-auto"> <p>Phone: (631) 309-1607</p></li>
                                        <li className="text-3xl mx-auto"><p>Email: 6lumah@gmail.com</p></li>
                                        <li className="italic underline text-aqua mt-6 text-xl mx-auto"><p>Don't have the time to call me at the moment no problem  </p></li>
                                        <li className="italic underline text-aqua text-xl mx-auto"><p> Simply fill the form and I will call you at the date and time that is appropriate for you. </p></li>
                                    </ul>
                                </div>
            
        </>
    )
}

export default Contact
