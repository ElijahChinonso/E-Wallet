import React from 'react'
import '../styles/signUp.css'

import SignUpImage from "./signUpImage";
import SignUpForm from "./signUpForm";


export default function SignUp () {
    return(
        <div className={'signUp_div'}>
                <SignUpImage/>
                <SignUpForm/>
        </div>
    )
}