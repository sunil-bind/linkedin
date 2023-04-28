import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupeervisorAcountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ChatIcon from '@mui/icons-material/Chat'
import Headerptions from './HeaderOptions';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }
  return (
    <div className='header'>
        <div className="header__left">
            <img src="abc.jpeg" alt="abc"/>
            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>

        </div>
        <div className="header__right">
        <Headerptions Icon={HomeIcon}title="Home" />
        <Headerptions Icon={SupeervisorAcountIcon} title="My Network" />
        <Headerptions Icon={BusinessCenterIcon} title="Jobs" />
        <Headerptions Icon={ChatIcon} title="Messaging" />
        <Headerptions 
         Icon={NotificationsIcon} title="Notifications" />
        {/* need to add proper avatr url */}
         <Headerptions  onClick={logoutOfApp}  title="ME"/> 
         {/* avatar ={user.photoUrl}  */}
        </div>
    </div>
  )
}

export default Header