import React, { useEffect, useState } from 'react';
import '../Shop/Shop.css'
import Card from '../Card/Card';

const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <div className='shop'>
            <div className="card">
                {
                    products.map(product => <Card product ={product} key ={product.id}></Card>)
                }
            </div>
            <div className="order-summary">
                <h3>Oder Summary</h3>
            </div>
        </div>
    );
};

export default Shop;