import React from 'react';
import './OderSummery.css'
import clear from '../../images/trash-alt.svg'
import Review from '../../images/arrow-right.svg'

const OderSummery = ({products}) => {
    console.log(products);
    let TotelPrice = 0;
    let TotalShippingCharg =0 ;
    for(const product of products){
        
        TotelPrice =TotelPrice + product.price;
        TotalShippingCharg = TotalShippingCharg +product.shipping
    }
   let Taxt = parseFloat((TotelPrice*0.1).toFixed(2))
   let GrendTotal = TotelPrice + TotalShippingCharg + Taxt
    return (
        <div className='order-summary'>
                <h3>Oder Summary</h3>
                <p>Selected Items: {products.length}</p>
                <p>Totel Price:${TotelPrice}</p>
                <p>Total Shoping Charge:${TotalShippingCharg}</p>
                <p>Taxt:${Taxt}</p>
                <h4>Grand Total:${GrendTotal}</h4>
                <div className='btn-continer'>
                    <button id='Clear-Cart' >Clear Cart<span><img src={clear} alt="" /></span></button>
                    <button id='Review-order'>Review Order <span><img src={Review} alt="" /></span></button>
                </div>

        </div>
    );
};

export default OderSummery;