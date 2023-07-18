import React from 'react'
import {Link} from 'react-router-dom'
import InputComponent from './InputComponent'
import ButtonComponent from './ButtonComponent'

const SignupComponent = () =>{
    const handleClick = (e) => {
        console.log(e)
        e.preventDefault()
        alert('you just signed up')
      }
      return(
<form>
    <InputComponent
      inputType = "text"
      inputPlaceHolder = "Enter Firstname"
    />
    <InputComponent
      inputType = "text"
      inputPlaceHolder = "Enter Lastname"
    />
    <InputComponent
      inputType = "email"
      inputPlaceHolder = "Enter Email Address"
    />
    <InputComponent
      inputType = "password"
      inputPlaceHolder = "Enter Password"
    />
    <ButtonComponent
      buttonType="submit"
      buttonText = "Sign Up"
      handleClick={handleClick}
    />
    <p>
       Already have an account? <Link to="/signin">Signin</Link>
    </p>
   </form>
)}

export default SignupComponent