import React from "react";
import './Header.css';


const Header=()=>{
    return(
        <header>
         <div className="header-over">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>welcome to my page <br></br> my name is mohammad sawalha</h2>
                        <p>Welcome to my page. I am a trainer web<br></br> page developer at Keys Information Technology Company.</p>
                             <form>
                                <input type="email" placeholder="email"></input>
                                <button type="submit">subscribe</button>
                             </form>

                    </div>
                </div>
            </div>



        </div>
           

        </header>

    )
}


export default Header;