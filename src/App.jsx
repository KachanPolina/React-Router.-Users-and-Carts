// router
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
// mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import GroupIcon from '@mui/icons-material/Group';
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// components
import Carts from './components/carts/Carts';
import Users from './components/users/Users';
// css
import './App.css';

function App() {
  const [value, setValue] = React.useState(0);
  return (
    <Router>
      <div className='header'>
        <Box sx={{ flexGrow: 1}}>
          <AppBar position='static' sx={{backgroundColor: '#87612e'}}>
            <Toolbar>
              <ShoppingCartIcon />
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                Carts Products Manager
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      <div className='navigation'>
        <Box sx={{ width: '100%' }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{
              backgroundColor: '#c39f4b',
              '& .MuiBottomNavigationAction-root': {
                color: '#fdfdfd',
              },
              '& .Mui-selected, & .Mui-selected .MuiSvgIcon-root': {
                color: '#75480d !important', 
              },
              '& .MuiBottomNavigationAction-root:hover': {
                color: '#3a2504',
              },
            }}
          >
            <BottomNavigationAction
              label='Home'
              icon={<HomeIcon />}
              component={NavLink}
              to='/'
            />
            <BottomNavigationAction
              label='Carts'
              icon={<ShoppingBasketIcon />}
              component={NavLink}
              to='/carts'
            />
            <BottomNavigationAction
              label='Users'
              icon={<GroupIcon />}
              component={NavLink}
              to='/users'
            />
          </BottomNavigation>
        </Box>
      </div>

      <Routes>
        <Route path='/' element={<div className='home-page'>Welcome to the home page!</div>} />
        <Route path='/carts/*' element={<Carts />} />
        <Route path='/users/*' element={<Users />} />
        <Route from='*' element={<Navigate to={'/'} />} />
      </Routes>

      <div className='footer'>
        <p>Country: Ukraine </p>
        <p>City: Zaporizhzhia</p>
      </div>
    </Router>
  );
}

export default App;
