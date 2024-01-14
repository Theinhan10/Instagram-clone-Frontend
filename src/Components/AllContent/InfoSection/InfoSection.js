import { Avatar } from '@mui/material'
import React from 'react'
import "./InfoSection.css"
import pic from "../../../images/DSC09653.jpeg";

export default function InfoSection() {
  return (
    <div>
        <div className='info_container'>
            <Avatar src={pic} className='info_image' />
            <div className='info-content'>
                <div className='info-username'>UserName</div>
                <div className='info-name'>Name</div>
            </div>
            <div className='info-switch'> Switch</div>
        </div>
    </div>
  )
}
