import {
  // NavLink,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import UserForm from './UserForm/UserForm';
import UserCarts from './UsersProducts/UsersProducts';
import UsersList from './UsersList/UsersList';

function Users() {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<UsersList />} />
        <Route path={`:id`} element={<UserCarts />} />
        <Route path={'edit/:id'} element={<UserForm />} />
      </Routes>
    </>
  );
}

export default Users;
