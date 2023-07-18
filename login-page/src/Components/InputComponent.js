import React from 'react'

const InputComponent = (props) =>{
    const {inputType , inputPlaceHolder} = props
    return(
        <input type = {inputType} placeholder={inputPlaceHolder}></input>
    )
}

export default InputComponent