import React from 'react'

function Profile() {
    return (
        <>
        <div className="mt-8 text-white bg-black rounded-lg p-4 mb-2  lg:mx-36 mt-2 grid grid-flow-col grid-cols-2 md:grid-cols-3 gap-2 grid-rows-1 bg-opacity-90"> 
                        <div className="text-white text-2xl mx-auto my-auto col-start-2   row-start-1"><h2 className="text-white text-3xl underline">Here a little about: Oliver Gervais</h2></div>
                        <img className="w-64  col-start-1 row-start-1 rounded-lg" src="Oliver.jpg" alt="Oliver Gervais pic"/>
                        </div>
            
        </>
    )
}

export default Profile
