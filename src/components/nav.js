import React, { Component } from 'react'
import { Link } from "react-router-dom";



export default class Nav extends Component {

    constructor(){
        super();
        this.state={
            showMenu:false
        }
    }
    operation()
    {
        this.setState({
            showMenu:!this.state.showMenu
        })
    }


    render() {
        return (
        <>
        
            <header className="px-6 lg:px-16  flex flex-wrap item-center py-2 lg:py-0 ">
                <div className="flex-1 flex justify-between items-center">
                    <Link to="/">
                    <img className="animate-pulse w-56" src="techLogo.svg" alt="Tech Logo"/>
                    </Link>
                </div>

                    <label onClick={() => this.operation()} className="lg:hidden">
                        <img className="w-16" src="hamburger_menu.svg" alt="hamburger menu"/>
                    </label>

                    <div className="lg:flex lg:items-center lg:w-auto" >
                    <nav>
                        <ul className=" hidden lg:flex items-center justify-between text-base text-white hover:text-aqua pt-4 lg:pt-0" >
                            <li> <Link to="/" className="lg:py-4         lg:px-24  xl:px-36 2xl:px-44 3xl:px-56  py-3 px-0 block border-b-2 border-aqua hover:border-white text-white hover:text-aqua font-sans">Home</Link> </li>
                            <li><Link to="/ContactMe" className="lg:py-4 lg:px-24  xl:px-36 2xl:px-44 3xl:px-56 py-3 px-0 block border-b-2 border-aqua hover:border-white text-white hover:text-aqua font-sans">ContactMe</Link></li>
                            <li><Link to="/Projects" className="lg:py-4  lg:px-24  xl:px-36 2xl:px-44 3xl:px-56 py-3 px-0 block border-b-2 border-aqua hover:border-white text-white hover:text-aqua font-sans">Projects</Link></li>
                        </ul>
                    </nav>
                    </div>
                    <div className="lg:flex lg:items-center w-full">
                    {
                        this.state.showMenu?
                        <nav>
                        <ul className="  lg:hidden items-center justify-between text-base text-white pt-4 " >
                            <li> <Link to="/" className=" py-3 px-0 block border-b-2 border-aqua hover:border-white text-white hover:text-aqua">Home</Link> </li>
                            <li><Link to="/ContactMe" className=" py-3 px-0 block border-b-2 border-aqua hover:border-white text-white hover:text-aqua">ContactMe</Link></li>
                            <li><Link to="/Projects" className=" py-3 px-0 block border-b-2 border-aqua hover:border-white text-white hover:text-aqua">Projects</Link></li>
                        </ul>
                    </nav>


                        :null
                    }
                    
                    </div>
                    
            </header>

       

        </>
    )
    }
}
