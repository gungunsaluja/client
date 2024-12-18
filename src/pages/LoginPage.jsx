import React, { useState } from 'react';
import "../styles/Login.scss"
const LoginPage = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    

    return (
        <div className = 'login'>
            <div className = 'login_content'>
                <form action = "login_content_form">

                    <input type = "email" placeholder = 'Email'  value = {email} onChange={(e)=>e.target.value}
                    required ></input>
                    <input type = "password" placeholder = "password" required ></input>
                    <button type = "submit">Log In</button>
                </form>
                <a href = "/register">Don't have an account ? Sign In Here</a>
            </div>



        </div>
    )
}
export default LoginPage;