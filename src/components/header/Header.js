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
    const login = useSelector((state) => state.login);
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
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  useEffect(()=>{
    setCartCount((c)=>{
        return 0;
    });
    setWishlistCount((c)=>{
      return 0;
  });
    products.forEach(elem => {
        if(elem.presentInCart === true){
            setCartCount((c)=>{
                return c + 1;
            });
        }
        if(elem.presentInWishlist === true){
          setWishlistCount((c)=>{
              return c + 1;
          });
      }
    });
  },[products]);
    return (
        <>
            <section className= "header">
                <nav>
                    <div className="brand">
                        {/* <Link  to="/"> <img className="logo" src={icon} alt="Logo"/></Link> */}
                    </div>
                    <div className="nav-items">
                    {!login ? <Link  className="nav-item" to="/"><span>HOME</span></Link> : <></>}
                    {!login ? <Link  className="nav-item" to="/aboutus">ABOUT US</Link> : <></>}
                    {!login ? <Link  className="nav-item" to="/provided">PROVIDED DONATION</Link> : <></>}
                    {!login ? <Link  className="nav-item" to="/sought">SOUGHT DONATION</Link> : <></>}
                    {!login ? <Link className="nav-item" to="/login">LOGIN</Link> : <></>}
                    {login ? <Link className="nav-item" to="/shop"> <Tooltip title="Shop"><AddBusinessIcon fontSize="medium" color="success"/></Tooltip></Link> : <></>}
                    {login ? <Link className="nav-item" to="/cart"><Tooltip title="Cart"><IconButton sx={{color:"black"}} aria-label="cart">
      <StyledBadge badgeContent={cartCount} color="primary">
        <ShoppingCartIcon sx={{color:"#4615b2"}} />
      </StyledBadge>
    </IconButton></Tooltip></Link> : <></>}

    {login ? <Link to="/wishlist"><Tooltip title="Wishlist"><IconButton sx={{color:"black"}} aria-label="cart">
      <StyledBadge badgeContent={wishlistCount} color="error">
        <FavoriteIcon sx={{color:"#b2102f"}} />
      </StyledBadge>
    </IconButton></Tooltip></Link> : <></>}
                    

                    {login ? <React.Fragment>
  
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
        
        <MenuItem onClick={()=>{
                        localStorage.removeItem("currentUser");
                        navigate('/login');
                    }} sx={{color:"black"}} 
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