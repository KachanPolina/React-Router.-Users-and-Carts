import { Routes, Route } from 'react-router-dom';
import CartsList from './CartsList/CartsList';
import CartsProducts from './CartsProducts/CartsProducts';

function Carts() {
  return (
    <>
      <Routes>
        <Route path={`:id`} element={<CartsProducts />} />
        <Route path={`/`} element={<CartsList />} />
      </Routes>
    </>
  )
}

export default Carts