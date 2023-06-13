import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { getAllProducts } from './services/productsService'
import ProductCard from './components/productCard';
import { AppContext } from './context';

// Examples of destructuring

// const test = {
//   a: 1,
//   b: 2
// }

// const {a, b} = test

// console.log(a)
// console.log(b)
// console.log(test.a)
// console.log(test.b)

// const arrayTest = [1, 2, 3]
// console.log(arrayTest[0])
// console.log(arrayTest[1])

// const [value1, value2] = arrayTest

function App() {

  const [products, setProducts] = useState([])

  const { car } = useContext(AppContext);

  useEffect(() => {
    const fetchProducts = getAllProducts()
    setProducts(fetchProducts)
  }, [])

  const getTotalProductsInCar = () => {
    return car.reduce((acc, product) => {
      return acc + product.quantity
    }, 0)
  }


  const getTotalToPay = () => {
    return car.reduce((acc, product) => {
      return acc + product.price * product.quantity
    }, 0)
  }

  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>E-Commerce App</h1>
        <h1>total: {getTotalProductsInCar()} Total a Pagar: {getTotalToPay()}</h1>
      </div>
      {products.map((product, index) => {
        return (
          <ProductCard product={product} key={index}/>
        )
      })}
    </div>
  );
}

export default App;
