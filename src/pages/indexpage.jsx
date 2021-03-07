import Nav from "../components/nav"

import React, { Component } from 'react'
import Profile from '../components/Profile'
import WorkEthic from '../components/WorkEthic'
import Skills from '../components/Skills'

export default class MainPage extends Component {

  
    render() {
        return (
            <>
            <div className="shadow-2xl bg-black w-sreen">
                <Nav/>
                </div>

                <div className="h-screen bg-white "
                style={{ 
                    backgroundImage: `url('techLogo.svg')`,
                    backgroundRepeat  : 'no-repeat',
                    backgroundPosition: 'center',
                    
                    }} >
                        <Profile/>
                        <WorkEthic/>
                        <Skills/>

                        

                                    
                                    
                        
                                    
                                </div>
            </>
        )
    }
}
