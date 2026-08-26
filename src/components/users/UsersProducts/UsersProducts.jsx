import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersProducts } from '../../../store/slices/productsSlice';
import '../../carts/CartsProducts/CartsProducts.css'

function UsersProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsList.products);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUsersProducts(id));
  }, [dispatch, id]);

  return (
    <ul className='carts-products'>
      {products.map(({ id, title, price, quantity, thumbnail }) => {
        return (
          <li key={id} className='product-cart'>
            <img src={thumbnail} alt={title} />
            <div className='product-info'>
              <h3>{title} </h3>
              <div className='price-and-quantity'>
                <p>Price - {price}</p>
                <p>Quantity - {quantity}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default UsersProducts;
