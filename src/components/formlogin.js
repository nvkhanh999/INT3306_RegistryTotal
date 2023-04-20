
import React, { useState } from "react";
import "./formlogin.css"

const Formlogin = () => {

    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    return (
        <div className="cover">
            <h1> REGISTRY TOTAL </h1>
            <input type="text" className="input-botton" placeholder="USERNAME"/>
            <input type="password" className="input-botton" placeholder="PASSWORD"/>
            <div className="login-btn" onClick={popup}>Login</div>

            
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>USERNAME OR PASSWORD INCORRECT</p>
            </div>
        </div>
    )
}
export default Formlogin