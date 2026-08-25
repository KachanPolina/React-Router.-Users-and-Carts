import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarts } from '../../../store/slices/cartsSlice';
import { Link } from 'react-router-dom';

function CartsList() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartsList.carts);

  useEffect(() => {
    dispatch(getAllCarts())
  }, [dispatch])

  return (
    <ul>
      {carts.map(({id, total}) => {
        return (
          <li key={id}>
            <Link to={`${id}`}>Cart {id} Total - {total}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CartsList;