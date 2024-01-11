import React from 'react';
import './Card.css'
import logo from '../../images/cart-plus.svg'

const Card = (props) => {
    const{img,name,price,seller,ratings}= props.product;
    // console.log(props.product);
const {addTocard}= props
    return (
        <div className='card-body'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2><small>Price :${price}</small></h2>
            <p>Menufacturer : {seller}</p>
            <p>Rating : {ratings} star</p>
            <button onClick={()=>addTocard(props.product)}>
                Add to Cart<span><img id='sopinglogo' src={logo} alt="" srcset="" /></span>
            </button>
        </div>
    );
};

export default Card;