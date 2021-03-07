import React from 'react'

function PWork() {
    return (
        <>
         <div className="mx-auto col-start-1 row-start-1 bg-black rounded-lg lg:px-16 xl:px-24 py-4 px-4 grid grid-flow-col grid-cols-1  ">
             <a target="_blank" rel="noopener noreferrer" href="https://competent-turing-03ed90.netlify.app/" >
                                            <div  className="mx-auto col-start-1  row-start-1 ">
                                                <h1 className="mb-2 underline text-2xl font-sans font-bold tracking-wider text-aqua">Task Manager</h1>
                                                <img className="w-94 rounded cursor-pointer" src="manager.jpg" alt="manager"/>
                                                <h1 className="text-white text-lg font-sans italic hover:text-aqua">Made Using:</h1>
                                                <h1 className="text-white text-l font-sans hover:text-aqua">Back end: Node.js , Express and MongoDb</h1>
                                                <h1 className="text-white text-lg font-sans hover:text-aqua">Front end: JavaScript, React, CSS, HTML and Tailwindcss</h1>
                                                </div>
                                                </a>
                                            
                                            
                                            </div>
                                        
                                        
    
    
                                        <div className=" mt-2 sm:mt-0 mx-auto col-start-1 lg:col-start-2 row-start-2 lg:row-start-1 bg-black rounded-lg px-4 lg:px-16 xl:px-24 py-4  grid grid-flow-col grid-cols-1  hover:text-aqua  ">
                                            <a target="_blank" rel="noopener noreferrer" href="https://restaurantmen.herokuapp.com/">
                                            <div  className="mx-auto col-start-1  row-start-1">
                                            <h1 className="mb-2 underline text-2xl font-bold tracking-wider text-aqua">Restaurant Website</h1>
                                                <img className="w-94 rounded cursor-pointer" src="resto.jpg" alt="resto"/>
                                                <h1 className="text-white text-lg italic hover:text-aqua">Made Using:</h1>
                                                <h1 className="text-white text-lg hover:text-aqua">Back end: Node.js , Express and MongoDb</h1>
                                                <h1 className="text-white text-lg hover:text-aqua">Front end: JavaScript, CSS, HTML/Pug</h1>
                                                
                                                </div>
                                                </a>
                                            
                                            
                                            </div>
            
        </>
    )
}

export default PWork
