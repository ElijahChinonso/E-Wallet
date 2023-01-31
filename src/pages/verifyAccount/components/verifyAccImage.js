import React from "react";
import '../styles/verifyAccImage.css'
import VerifyAccImg from '../../../asset/image/signUpImg.png'

export default function VerifyAccountImage() {
    return(
        <div className={'manWithDivs_div'}>
            <img src={VerifyAccImg} className={'verifyAccImg'} alt={'image'}/>
        </div>
    )
}