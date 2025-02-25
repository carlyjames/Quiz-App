import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
// auth
import jwtDecode from 'jwt-decode';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
// images
import avatar11 from '../../assets/avatar/avatar.png'

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logoutUser } = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token) {
    const decoded = jwtDecode(token)
    var user_id = decoded.user_id
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      {token === null &&
        <div className='flex items-center flex-col gap-3'>
          <Link to='/signup'><Button className='nav-btn btn-outlined' variant='outlined'>Signup</Button></Link>
          <Link to='/login'><Button className='nav-btn btn-contained' variant='contained'>Login</Button></Link>
        </div>
      }
      {token !== null &&
        <div className='flex items-center flex-col gap-3'>
          <Link>
            <img src='' alt="" />
          </Link>
          <div class="avatar-wrapper">
            <img src={avatar11} alt="Avatar" class="avatar" />
            <div class="verified-avatar-icon"></div>
          </div>
          <IconButton >
            <LogoutIcon onClick={logoutUser} sx={{ color: 'black', fontSize: '28px' }} />
          </IconButton>
        </div>
      }
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ background: '#14105F' }} component="nav">
        <Toolbar>
          {/* <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton> */}
          {/* logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
            <Link to='/'>Dev.Quiz</Link>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent : 'space-between' }}>
            {token === null &&
              <div className='flex items-center gap-3'>
                <Link to='/signup'><Button className='nav-btn btn-outlined' variant='outlined'>Signup</Button></Link>
                <Link to='/login'><Button className='nav-btn btn-contained' variant='contained'>Login</Button></Link>
              </div>
            }
            {token !== null &&
              <div className='flex items-center gap-3'>
                {/* <Link>
                  <img className='h-[50px]' src={avatar11} alt="" />
                </Link> */}
                <Link to='/dashboard'>
                  <div class="avatar-wrapper">
                    <img src={avatar11} alt="Avatar" class="avatar" />
                    <div class="verified-avatar-icon"></div>
                  </div>
                </Link>
                <IconButton sx={{ position: { xs: 'absolute', sm: 'relative' }, right : '0' }} className='absolute r-0 float-right' >
                  <LogoutIcon onClick={logoutUser} sx={{ color: 'white', fontSize: '28px' }} />
                </IconButton>
              </div>
            }
            {/* {
              token.verified === null && <p>Hello</p>
            } */}
          </Box>
        </Toolbar>
      </AppBar>
      {/* <nav>
        <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true, }} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }}>
          {drawer}
        </Drawer>
      </nav> */}

    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;