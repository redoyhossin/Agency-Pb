import * as React from 'react';
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
import Button from '@mui/material/Button';
import agencylogo from '../../Assets/agency-logo.png';


const drawerWidth = 240;
const navItems = ['Home', 'Our Portfolio', 'Our Team', 'Contact Us'];

export default function Navheader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        sx={{ mt: '1rem' }}

      >
        <img
          style={{ width: '50px', borderRadius: '35px' }}


          src={agencylogo} alt="agency-logo"
        />


      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button
          sx={{ bgcolor: 'primary.green' }}
        >
          Login
        </Button>
      </List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: 'static',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          mt: 2


        }}
      >
        <Toolbar>
          <IconButton
            color='primary'
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2, display: { md: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
          <Box

            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', p: '0', m: '0' } }}
          >
            <Box sx={{mt:"2px"}}>
              <img
                style={{ width: '60px', borderRadius: '35px', p: '0', m: '0' }}

                src='https://i.ibb.co/0KLDJ2H/agency-logo.png' alt="agency-logo"
              />
            </Box>
           

          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none',md:'block'  } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'primary.main' }}
                variant='text'
              >
                {item}
              </Button>

            ))}
            <Button
              sx={{ bgcolor: 'primary.green' }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block'  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
      

      </Box>
    </Box>
  );
}