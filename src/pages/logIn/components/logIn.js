import React from 'react'
import '../styles/logIn.css'
import LogInImage from "./logInImage";
import LogInForm from "./logInForm";

export default function LogIn () {
    return(
        <div className={'logIn_div'}>
            <LogInImage/>
            <LogInForm/>
        </div>
    )
}