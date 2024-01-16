import React, { useEffect, useState } from 'react';
import '../Shop/Shop.css'
import Card from '../Card/Card';
import OderSummery from '../OrderSummery/OderSummery';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts] = useState([])
    const [card,setCard] = useState([])


    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    
    useEffect(()=>{
        const storedCard = getShoppingCart();
        const saveCard = [];
        for (const id in storedCard) {
            const addedCard = products.find(product =>product.id===id)
            if(addedCard){
                const quantity = storedCard[id];
                addedCard.quantity = quantity;
                saveCard.push(addedCard)
            }
            
        }
        setCard(saveCard);
       
    },[products])

    const addTocard=(selecetedProduct)=>{
        // console.log(selecetedProduct);
        let newCard = []
        const exists = card.find(product =>product.id===selecetedProduct.id);
        if(!exists){
            selecetedProduct.quantity= 1;
            newCard = [...card,selecetedProduct];
        }
        else{
                const rest = card.filter(product => product.id !== selecetedProduct.id);
                selecetedProduct.quantity = selecetedProduct.quantity + 1;
                newCard = [...rest,selecetedProduct];
                
        }
        // console.log(newCard);
        
        setCard(newCard);
        addToDb(selecetedProduct.id)
        // console.log(newCard)
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
            <div>
                <OderSummery products={card}></OderSummery>

            </div>
        </div>
    );
};

export default Shop;