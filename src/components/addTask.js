import React, { Component } from 'react'
import '../styles/main.css';
import axios from 'axios';



export default class AddTask extends Component {
    state = {
        _id: "" ,
        text:"",
        date: "" ,
        phone: "",
        reminder:false,
        tasks:[]
      };

      



      handleChange = ({target}) => {
        
        const {name, value} = target;
    
        this.setState({[name]: value});
    
      };
    
      


      submit = (event) =>{
        
    
        var payload = {
          text:this.state.text,
          date:this.state.date,
          phone:this.state.phone,
          reminder:this.state.reminder
        };
        axios({
          url: "/api/save",
          method: "POST",
          data: payload
        })
        .then(() => {
          console.log("Data has been send to server.")
          this.resetUserInput();        
        })
        .catch(() =>{
          console.log("Data has not been received !!! ERROR !!!.")
    
        });
    
      };
    

    render() {
        return (
          <>
        
                <form className="bg-black rounded-lg md:px-4 py-4 mb-2 md:mx-20 lg:mx-36 xl:mx-56 2xl:mx-96 mt-2 grid grid-flow-col grid-cols-2 grid-rows-2 gap-2" onSubmit={this.submit}>
                  
                  
                            <input 
                            className="shadow-2xl placeholder-white focus:placeholder-aqua text-lg font-sans tracking-wide font-bold  bg-black text-white    border-b-4 border-aqua  hover:border-white"
                            type="text"
                            name= "text"
                            value={this.state.text}
                            placeholder="Your Name"
                            onChange={this.handleChange}
                            />
                         
                           
                                <input 
                                className="shadow-2xl placeholder-aqua text-white hover:text-aqua text-lg font-sans tracking-wide font-bold   bg-black   border-b-4 border-aqua hover:border-white"
                                type="datetime-local"
                                name= "date"
                                value={this.state.date}
                                
                                onChange={this.handleChange}/>
                             
                               
                                        <input 
                                        className=" shadow-2xl placeholder-white focus:placeholder-aqua  text-white text-lg font-sans tracking-wide font-bold placeholder-opacity-75 bg-black    border-b-4 border-aqua hover:border-white"
                                        type="text"
                                        name= "phone"
                                        placeholder="Your Phone Number"
                                        value={this.state.phone}
                                        onChange={this.handleChange}/>
                                      
                                            <button className=" shadow-2xl text-white hover:text-aqua text-xl font-sans tracking-wide font-bold  flex-auto mb-1  bg-black  px-4 py-3 rounded   border-b-4 border-aqua  hover:border-white">Submit</button>
                                       
                                            </form>
                                            </>
                                            
                                            )
                                        }
                                    }

