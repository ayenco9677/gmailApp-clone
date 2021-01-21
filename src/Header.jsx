import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from './features/userSlice';
import {auth} from './firebase';

function Header() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://res.cloudinary.com/dhpm6cjag/image/upload/v1609349567/gmail-logo_katoti.jpg" alt="gmail_logo"/>
            </div>
            <div className="header__middle">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input placeholder="Search mail" type="text"/>
                <IconButton>
                    <ArrowDropDownCircleIcon/>
                </IconButton>
            </div>
            <div className="header__right">
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Header
