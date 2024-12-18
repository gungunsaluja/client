import React, { useState } from 'react'
import "../styles/Register.scss"

const RegisterPage = () =>{
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        profileImage:null
    })
    console.log(formData);
    const handleChange = (e) =>{
        const {name,value,files} = e.target
        setFormData({
            ...formData,
            [name]:value,
            [name]:name==="profileImage" ?files[0]:value
        })

    }
    return (
        <div className = 'register'>
            <div className = 'register_content'>
                <form className = "register_content_form">
                    <input placeholder = "First Name" name = "firstName" 
                    value = {formData.firstName}
                    onChange={handleChange}
                    required
                    ></input>
                    <input placeholder = "Last Name" name = "lastName" value = {formData.lastName}
                    onChange={handleChange}
                     required
                    ></input>
                    <input placeholder = "Email" type = "email" name = "email" value = {formData.email}
                    onChange={handleChange}
                    required 
                    ></input><input placeholder = "Password" name = "password" type = "password" value={formData.password}
                    onChange={handleChange}
                    required
                    ></input><input placeholder = "Confirm Password" name = "confirmPassword" type = "password" value={formData.confirmPassword}
                    onChange={handleChange}
                    required 
                    ></input>
                    <input type = "file" name = "profileImage"
                     
                     accept = "image/" 
                    required 
                    style = {{display:'none'}} id = "image"
                    onChange={handleChange} ></input>

                    <label htmlFor = "image">
                        <img src = "/assets/addImage.png" alt = "add profile photo"></img>
                        <p>Upload your photo</p>
                    </label>
                    {formData.profileImage && 
                    (
                        <img src = {URL.createObjectURL(formData.profileImage)} alt = "profile photo"
                        style = {{maxWidth:"80px"}}></img>
                    )}
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