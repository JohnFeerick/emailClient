import React from 'react';
import "./Header.css";
import { Search, Menu, ArrowDropDown, Apps, Notifications } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <Menu />
            </IconButton>
            <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" 
            alt="" />
        </div>
        <div className="header__middle">
            <Search />
            <input placeholder='Search mail' type="text" />
            <ArrowDropDown className="header__inputCaret" />
        </div>
        <div className="header__right">
            <IconButton>
                <Apps />
            </IconButton>
            <IconButton>
                <Notifications />
            </IconButton>
            <Avatar />
        </div>
    </div>
  )
}

export default Header