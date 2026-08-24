import { Routes, Route } from 'react-router-dom';
import CartsList from './CartsList/CartsList';
import CartsItems from './CartsItems/CartsItems';


function Carts() {
  return (
    <>
      <Routes>
        <Route path={`:id`} element={<CartsItems />} />

        <Route path={`/`} element={<CartsList />} />
      </Routes>
    </>
  )
}

export default Carts