import React from 'react';
import './OderSummery.css'
import clear from '../../images/trash-alt.svg'
import Review from '../../images/arrow-right.svg'

const OderSummery = ({products}) => {
    // console.log(products);
    let TotelPrice = 0;
    let TotalShippingCharg =0 ;
    let quantity = 0 ; 
    for(const product of products){
        quantity = quantity + product.quantity
        TotelPrice =TotelPrice + product.price*product.quantity;
        TotalShippingCharg = TotalShippingCharg +product.shipping
    }
   let Taxt = parseFloat((TotelPrice*0.1).toFixed(2))
   let GrendTotal = TotelPrice + TotalShippingCharg + Taxt
    return (
        <div className='order-summary'>
                <div>
                <h3>Oder Summary</h3>
                </div>
                <div className='order-details'>
                <p>Selected Items: {quantity}</p>
                <p>Totel Price:${TotelPrice}</p>
                <p>Total Shoping Charge:${TotalShippingCharg}</p>
                <p>Taxt:${Taxt}</p>
                </div>
                <div>
                <h4>Grand Total:${GrendTotal}</h4>
                </div>
                <div className='btn-continer'>
                    <button id='Clear-Cart' >Clear Cart<span><img src={clear} alt="" /></span></button>
                    <button id='Review-order'>Review Order <span><img src={Review} alt="" /></span></button>
                </div>

        </div>
    );
};

export default OderSummery;