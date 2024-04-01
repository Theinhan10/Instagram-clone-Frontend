import { Avatar } from '@mui/material'
import React from 'react'
import "./InfoSection.css"
import pic from "../../../images/DSC09653.jpeg";
import { useAuth } from '../../../Context/AuthContext';
import { useNavigate } from "react-router-dom";


export default function InfoSection() {

  const {signOut} = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    signOut();
    navigate("/");
    
  }

  return (
    <div>
        <div className='info_container'>
            <Avatar src={pic} className='info_image' />
            <div className='info-content'>
                <div className='info-username'>UserName</div>
                <div className='info-name'>Name</div>
            </div>
            <div className='info-switch' onClick={logOut}> Switch "signout"</div>
        </div>
    </div>
  )
}
