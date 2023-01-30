import React from "react";
import '../styles/signUpImage.css'
import SignUpImg from '../../../asset/image/signUpImg.png'

export default function SignUpImage() {
    return(
        <div className={'manWithDivs_div'}>
            <img src={SignUpImg} className={'signUpImg'} alt={'image'}/>
        </div>
    )
}