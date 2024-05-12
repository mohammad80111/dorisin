import React from "react";
import Data from "../../../Data";
import './Pricing.css'



const Pricing=()=>{
    const itemprice=Data.pricing.map((itembox)=>{
        return(
            <div className="col-md-4">
                <div className="box">
                <h6>{itembox.title}</h6>
                <h4>{itembox.price}</h4>
                <span>{itembox.time}</span>
                <ul>
                       <li>
                        <span>title: </span>
                        {itembox.title}
                      </li>


                      <li>
                        <span>price: </span>
                        {itembox.price}
                      </li>


                    <li>

                        <span>time: </span>
                         {itembox.time}
                    </li>


                    <li>
                    <span>bandwidth: </span>
                    {itembox.bandwidth}
                    </li>


                <li>
                    <span>onlinespace: </span>
                    {itembox.onlinespace}
                </li>
                     <li>
                        <span>hamodeh: </span>
                      {itembox.support}
                      </li>
                </ul>
                </div>
            </div>

        )
    })
    return(
        <section className="prices">
            <div className="container">
                <div className="row">
                    <div className="col-md-12  col-lg-12">
                        <h2>our pricing</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy</p>


                    </div>
                </div>


                <div className="row">
                    {itemprice}
                    
                </div>
            </div>

        </section>

    )
}


export default Pricing;