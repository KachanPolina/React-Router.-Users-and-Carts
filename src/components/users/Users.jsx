import {
  // NavLink,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import UserForm from './UserForm/UserForm';
import UserCarts from './UsersCarts/UsersCart';
import UsersList from './UsersList/UsersList';

function Users() {
  return (
    <>
      <Routes>
        <Route path={`add/:id`} element={<UserForm />} />
        <Route path={`:id`} element={<UserCarts />} />
        <Route path={`/`} element={<UsersList />} />
      </Routes>
    </>
  )
}

export default Users