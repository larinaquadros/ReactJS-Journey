import React from 'react'
import InputComponent from './InputComponent'
import ButtonComponent from './ButtonComponent'
import { Link } from 'react-router-dom';

const SigninComponent = () => {

    const handleClick = (e) => {
        console.log(e)
        e.preventDefualt()
        alert('You just signed in')
    }
    return (
        <form>
            <InputComponent inputType="email" inputPlaceHolder="Enter email address" />
            <InputComponent inputType="password" inputPlaceHolder="Enter password" />
            <ButtonComponent buttonType="submit" buttonText="Sign in" handleClick={handleClick}></ButtonComponent>
            <p>
                Dont have an account? <Link to="/signup">Signup</Link>
            </p>
        </form>
    )
}

export default SigninComponent