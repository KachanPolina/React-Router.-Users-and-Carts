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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';// components
import Carts from './components/carts/Carts';
import Users from './components/users/Users';
// css
import './App.css';

function App() {
  return (
    <Router>
      <div className='header'>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
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
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/carts'>Carts</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<div>Ласкаво просимо на головну сторінку!</div>} />
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
