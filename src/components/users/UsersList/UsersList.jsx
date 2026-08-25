import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers } from '../../../store/slices/usersSlice';
import { Link } from 'react-router-dom';

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersList.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <Link to={`${user.id}`}>
              <p className='user'>
                {user.id} {user.firstName} {user.lastName}
              </p>
            </Link>
            <Link to={`edit/${user.id}`}>
              <p>Edit</p>
            </Link>
            <p id='del' onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default UsersList;
