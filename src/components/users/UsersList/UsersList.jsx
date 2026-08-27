// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
// import { deleteUser, getAllUsers } from '../../../store/slices/usersSlice';
import './UsersList.css';
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from '../../../store/api/usersApi';

function UsersList() {
  // const dispatch = useDispatch();
  // const users = useSelector((state) => state.usersList.users);

  const { data: users = [] } = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id).unwrap();
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, [dispatch]);

  return (
    <ul className='users-list'>
      {users.map((user) => {
        return (
          // <div >
          <li key={user.id} className='user-info'>
            <Link to={`${user.id}`} className='user-name'>
              <p>
                {user.id} {user.firstName} {user.lastName}
              </p>
            </Link>
            <Link to={`edit/${user.id}`} className='user-buttons edit-button'>
              <ModeEditIcon />
            </Link>
            <p
              // onClick={() => dispatch(deleteUser(user.id))}
              onClick={() => handleDeleteUser(user.id)}
              className='user-buttons delete-button'
            >
              <DeleteIcon />
            </p>
          </li>
          // </div>
        );
      })}
    </ul>
  );
}

export default UsersList;
