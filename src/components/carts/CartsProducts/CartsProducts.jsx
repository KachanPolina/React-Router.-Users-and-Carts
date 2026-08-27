import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCartsProducts } from '../../../store/slices/productsSlice';
import './CartsProducts.css';
import { useGetCartsProductsQuery } from '../../../store/api/productsApi';

function CartsProducts() {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.productsList.products);
  const { id } = useParams();
  // const cartId = Number(id);

  const { data: products = [] } = useGetCartsProductsQuery(id);



  // useEffect(() => {
  //   dispatch(getCartsProducts(id));
  // }, [dispatch, id]);

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

export default CartsProducts;
