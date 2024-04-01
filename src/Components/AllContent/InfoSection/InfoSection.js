import { Avatar } from '@mui/material'
import React from 'react'
import "./InfoSection.css"
import pic from "../../../images/DSC09653.jpeg";
<<<<<<< HEAD
import { useAuth } from '../../../Context/AuthContext';
import { useNavigate } from "react-router-dom";


export default function InfoSection() {

  const {signOut} = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    signOut();
    navigate("/");
    
  }

=======

export default function InfoSection() {
>>>>>>> ab4111138fc94f4a85dee606cfab0dced59e13d0
  return (
    <div>
        <div className='info_container'>
            <Avatar src={pic} className='info_image' />
            <div className='info-content'>
                <div className='info-username'>UserName</div>
                <div className='info-name'>Name</div>
            </div>
<<<<<<< HEAD
            <div className='info-switch' onClick={logOut}> Switch "signout"</div>
=======
            <div className='info-switch'> Switch</div>
>>>>>>> ab4111138fc94f4a85dee606cfab0dced59e13d0
        </div>
    </div>
  )
}
