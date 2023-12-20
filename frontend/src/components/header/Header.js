import React, { useEffect, useState } from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Redirect } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import environment from "../../environments/environment.js";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  //const login = useSelector((state) => state.login);
  
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  console.log(isLoggedIn);

  //console.log(login)
    const navigate = useNavigate();
    
    const products = useSelector((state) => state.products);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.setItem("isLoggedIn", "false");
    navigate('/login');
  };
  
    return (
        <>
            <section className= "header">
                <nav>
                    <div className="brand">
                        
                    </div>
                    <div className="nav-items">
                    {console.log()}
                    <Link  className="nav-item" to="/"><span>HOME</span></Link>
                    <Link  className="nav-item" to="/aboutus">ABOUT US</Link>
                    <Link  className="nav-item" to="/provided">PROVIDED DONATION</Link>
                    <Link  className="nav-item" to="/sought">SOUGHT DONATION</Link>
                    {!isLoggedIn? <Link className="nav-item" to="/login">LOGIN</Link> : <></>}
                    
                    {isLoggedIn ? <React.Fragment>
  
        <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <AccountCircleIcon size="medium" sx={{color:"#b26500"}}/>
            {/* <Avatar sx={{ width: 28, height: 28, backgroundColor: "#0080ff" }}></Avatar> */}
          </IconButton>
        </Tooltip>
    
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="/profile" ><MenuItem sx={{color:"black"}} onClick={handleClose}>
        
        <Avatar sx={{ width: 32, height: 32 , backgroundColor: "transparent" }}><AccountCircleIcon sx={{color:"grey"}}/></Avatar> 
         My profile 
        </MenuItem></Link>
        <Divider />
        <Link to="/change-password" >
        <MenuItem sx={{color:"black"}} onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Change password
        </MenuItem></Link>
        <Link to="/mydonations" >
          <MenuItem sx={{ color: "black" }} onClick={handleClose}>
        <ListItemIcon>
        <FavoriteIcon fontSize="small" />
        </ListItemIcon>
        My donations
        </MenuItem></Link>
        <MenuItem sx={{ color: "black" }} onClick={handleLogout}
                    // onClick={handleClose}
                    >
          <ListItemIcon>
            <Logout  fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment> : <></>}
                    
                    
                    </div>
                </nav>
            </section>
        </>
    );
};
export default Header;