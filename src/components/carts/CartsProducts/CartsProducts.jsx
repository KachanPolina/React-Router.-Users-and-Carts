import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCartsProducts } from '../../../store/slices/productsSlice';

function CartsProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsList.products);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCartsProducts(id));
  }, [dispatch, id]);

  return (
    <div>
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

export default CartsProducts;
