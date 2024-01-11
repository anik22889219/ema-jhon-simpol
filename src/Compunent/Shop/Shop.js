import React, { useEffect, useState } from 'react';
import '../Shop/Shop.css'
import Card from '../Card/Card';

const Shop = () => {
    const [products,setProducts] = useState([])
    const [card,setCard] = useState([])


    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const addTocard=(product)=>{
        const newCard = [...card,product];
        setCard(newCard);
        console.log(newCard)
        }
    
    return (
        <div className='shop'>
            <div className="card">
                {
                    products.map(product => 
                    <Card 
                        product ={product} 
                        key ={product.id}
                        addTocard ={addTocard}
                    ></Card>)
                }
                
            </div>
            <div className="order-summary">
                <h3>Oder Summary</h3>
                <p>Selected Items:{card.length}</p>

            </div>
        </div>
    );
};

export default Shop;