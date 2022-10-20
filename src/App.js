import './App.css';
import Categories from './components/categories/Categories';
import Header from './components/header/Header';
import EditProduct from './components/products/EditProduct';
import NewProduct from './components/products/NewProduct';
import Products from './components/products/Products';
import { Routes, Route } from 'react-router-dom'
import ProductPage from './components/products/ProductPage';
import ProductsByCategory from './components/products/ProductsByCategory';

function App() {
  return (
    <div className="pr-10 pl-10 pt-4 pb-4 bg-[#eeeeee] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Header />
      <div className='flex items-center justify-center'>
        <Routes>
          <Route path='/' element={ <Products/>} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<EditProduct/>}/>
          <Route path='/products/category/:categoryName' element={<ProductsByCategory/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
          <Route path='/new/product' element={<NewProduct/>}/>
          <Route path='/categories' element={ <Categories/>} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
