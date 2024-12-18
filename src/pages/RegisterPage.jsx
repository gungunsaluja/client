import React from 'react'
import "../styles/Register.scss"

const RegisterPage = () =>{
    return (
        <div className = 'register'>
            <div className = 'register_content'>
                <form className = "register_content_form">
                    <input placeholder = "First Name" name = "firstname" required
                    ></input>
                    <input placeholder = "Last Name" name = "lastname" required
                    ></input>
                    <input placeholder = "Email" type = "email" name = "email" required 
                    ></input><input placeholder = "Password" name = "password" type = "password" required
                    ></input><input placeholder = "Confirm Password" name = "confirmPassword" type = "password" required 
                    ></input>
                    <input type = "file" name = "profileImage" accept = "image/" required style = {{display:'none'}} id = "image" ></input>
                    <label htmlFor = "image">
                        <img src = "/assets/addImage.png" alt = "add profile photo"></img>
                        <p>Upload your photo</p>
                    </label>
                    <button type = "submit" >Register</button>


                </form>
                <a href = '/login'>Already have an account ? Log In Here

                </a>
            </div>
            RegisterPage

        </div>
    )
}
export default RegisterPage;