import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import "../CSS/Header.css"
const Header=()=>{
  const pages =["fsf","hh"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static" className="Bg-color">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <img  src={require("../images/Logo.svg").default} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box className="list-items">
           <Link to='/'>  <Button
               className="header-btn"
                 onClick={handleCloseNavMenu}
               >
            Home
               </Button> 
               </Link> 
               <Button
               className="header-btn"
                 onClick={handleCloseNavMenu}
               >
           About us
               </Button>  <Button
               className="header-btn"
                 onClick={handleCloseNavMenu}
                 variant="contained"
                
               >
            Landing Solutions <FontAwesomeIcon icon={faAngleDown} />
               </Button> 
    
         <Link to='/Apply'>   <Button className="btn-apply">
                Apply Now
            </Button></Link>
          </Box>
        
        </Toolbar>
      </Container>
    </AppBar>
    
    
     {/* /* responsive header */  }
     <AppBar position="static" className="header-color">
      <Container >
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <Box className="list-item">
              <Button
       className="header-btn"
                  onClick={handleCloseNavMenu}
                >
             Home
                </Button>  
                <Button
                className="header-btn"
                  onClick={handleCloseNavMenu}
                >
            About us
                </Button>  <Button
                className="header-btn"
                  onClick={handleCloseNavMenu}
                  variant="contained"
                
                >
             Landing Solutions <FontAwesomeIcon icon={faAngleDown} />
                </Button> 
    
             <Button className="btn-apply">
                 Apply Now
             </Button>
           </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </>
)
}
export default Header;