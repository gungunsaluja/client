import React from 'react'
const RegisterPage = () =>{
    return (
        <div className = 'register'>
            <div className = 'register_content'>
                <form>
                    <input placeholder = "First Name" name = "firstname" required
                    ></input>
                    <input placeholder = "Last Name" name = "lastname" required
                    ></input>
                    <input placeholder = "Email" type = "email" name = "email" required 
                    ></input><input placeholder = "Password" name = "password" type = "password" required
                    ></input><input placeholder = "Confirm Password" name = "confirmPassword" type = "password" required 
                    ></input>
                    <input type = "file" name = "profileImage" accept = "image/" required style = {{display:'none'}} ></input>
                    <label>
                        <img src = "/assets/addImage.png" alt = "add profile photo"></img>
                    </label>

                </form>
                <a href = '/login'>Already have an account ? Log In Here

                </a>
            </div>
            RegisterPage

        </div>
    )
}
export default RegisterPage;