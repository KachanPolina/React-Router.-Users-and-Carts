import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCarts } from '../../../store/slices/cartsSlice';
import './CartsList.css';

function CartsList() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartsList.carts);

  useEffect(() => {
    dispatch(getAllCarts())
  }, [dispatch])

  return (
    <ul className='carts-list'>
      {carts.map(({id, total}) => {
        return (
          <li key={id}>
            <Link to={`${id}`}>Cart {id} | Total - {total}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CartsList;