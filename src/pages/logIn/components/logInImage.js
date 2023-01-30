import React from 'react'
import '../styles/logInImage.css'
import LogInImg from '../../../asset/image/logInImg.png'

export default function LogInImage () {
    return(
        <div className={'logInImage_div'}>
            <img src={LogInImg} className={'logInImage'} alt={'image'}/>
        </div>
    )
}