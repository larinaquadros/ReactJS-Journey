import React from 'react'


const ButtonComponent = (props) =>{
const {buttonText, buttonType, handleClick} = props
return(
    <button type = {buttonType}  onClick={handleClick}>{buttonText}</button>
)
}

export default ButtonComponent