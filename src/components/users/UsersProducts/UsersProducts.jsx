import { useParams } from 'react-router-dom';
import { useGetUsersProductsQuery } from '../../../store/api/productsApi';
import '../../carts/CartsProducts/CartsProducts.css'

function UsersProducts() {
  const { id } = useParams();
  const { data: products = [] } = useGetUsersProductsQuery(id);

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
