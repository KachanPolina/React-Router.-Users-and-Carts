import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersProducts } from '../../../store/slices/productsSlice';
import { useParams } from 'react-router-dom';

function UsersProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsList.products);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUsersProducts(id));
  }, [dispatch, id]);

  return (
    <div>
      {console.log(products)}
      {products.map(({ id, title, price, quantity, thumbnail }) => {
        return (
          <li key={id}>
            <img src={thumbnail} alt={title} />
            {title} | Price - {price} | Quantity - {quantity}
          </li>
        );
      })}
    </div>
  );
}

export default UsersProducts;
