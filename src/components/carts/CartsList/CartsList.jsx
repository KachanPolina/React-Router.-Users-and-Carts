import { Link } from 'react-router-dom';
import { useGetAllCartsQuery } from '../../../store/api/cartsApi';
import './CartsList.css';

function CartsList() {
  const { data: carts = [] } = useGetAllCartsQuery();

  return (
    <ul className='carts-list'>
      {carts.map(({ id, total }) => {
        return (
          <li key={id}>
            <Link to={`${id}`}>
              Cart {id} | Total - {total}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CartsList;
