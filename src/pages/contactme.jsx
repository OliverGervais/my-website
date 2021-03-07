import React from "react";
import AddTask from "../components/addTask";
import Nav from "../components/nav"
import Contact from "../components/Contact"

const ContactMe = () => {
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
                        <Contact/>

                        <div className=" col-start-1 justify-center ">
                                <AddTask/>
                                </div>
            </div>
            </>
        )
};

export default ContactMe;