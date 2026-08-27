import { Link } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from '../../../store/api/usersApi';
import './UsersList.css';

function UsersList() {
  const { data: users = [] } = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id).unwrap();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ul className='users-list'>
      {users.map((user) => {
        return (
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
              onClick={() => handleDeleteUser(user.id)}
              className='user-buttons delete-button'
            >
              <DeleteIcon />
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default UsersList;
