import React from "react";
import Data from "../../../Data";
import Servitem from "./Servitem";
import './Service.css';
import hamod from './../../../assets/WhatsA.jpg';

const Service=()=>{
    const getdata=Data.serv.map((item)=>{
        return(
            <div className="col-md-4">
              <Servitem title={item.title} text={item.text} icons={item.icons}/>
            </div>
        )
    })
    return(
        <section className="sevice">

            <div className="container">
                <div className="row">


                    <div className="col-md-12 col-lg-12">
                        <h2>my experiance</h2>
                        <hr></hr>
                        <p>I design web pages using Frontend programming languages <br></br>I am pleased that you visited my page</p>

                    </div>


                </div>



                <div className="row">
                    {getdata}
                    
                </div>



                <div className="row last">
                    <div className="col-md-6 ri">
                        <h3>digital wep site design</h3>
                        <p>Letraset sheets containing  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <ul>
                            <li>html</li>
                            <li>css</li>
                            <li>bootstrap</li>
                            <li>javascript</li>
                            <li>react</li>
                        </ul>

                    </div>


                    <div className="col-md-6">
                        <img src={hamod} title></img>
                        
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Service;