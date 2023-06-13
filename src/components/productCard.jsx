import { useContext } from 'react';
import { AppContext } from '../context';


function ProductCard(props) {
    const { product } = props;

    const { setCar, car } = useContext(AppContext)

    const addItemToCar = () => {
        const existProduct = car.find((currentProduct) => currentProduct.name === product.name)
        if (existProduct) {
            const otherProducts = car.filter((currentProduct) => currentProduct.name !== product.name)
            setCar([...otherProducts, { ...product, quantity: existProduct.quantity + 1 }])
        } else {
            setCar([...car, { ...product, quantity: 1 }])
        }

    }

    const takeoffItemToCar = () => {
        const existProduct = car.find((currentProduct) => currentProduct.name === product.name)
        if (existProduct) {
            if (existProduct.quantity === 1) {
                const otherProducts = car.filter((currentProduct) => currentProduct.name !== product.name)
                setCar([...otherProducts])
            } else {
                const otherProducts = car.filter((currentProduct) => currentProduct.name !== product.name)
                setCar([...otherProducts, { ...product, quantity: existProduct.quantity - 1 }])
            }
        }
    }

    const getQuantity = () => {
        const existProduct = car.find((currentProduct) => currentProduct.name === product.name)
        if (existProduct) {
            return existProduct.quantity
        }
        return 0
    }

    return (
        <div style={{background: 'chocolate', borderRadius: '15px', margin: '15px', padding: '30px', display: 'flex', justifyContent: 'space-between'}} >
            <div>
                <p><strong>Name:</strong> {product?.name}</p> 
                <p><strong>Price:</strong> {product?.price}</p> 
                <p><strong>Description:</strong> {product?.description}</p>
                <button onClick={addItemToCar} style={{ marginRight: '10px' }}>+</button>
                {getQuantity()}
                <button onClick={takeoffItemToCar} style={{marginLeft: '10px'}}>-</button>
            </div>
            <div>
                <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
            </div>
        </div>
    )
}

export default ProductCard;