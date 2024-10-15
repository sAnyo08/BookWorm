import React, { useContext } from 'react';
import './cart-item-card.styles.css';
import { CartContext } from '../../../App';

const CartItemCard = ({ bookData }) => {

    const { cartItems, setCartItems } = useContext(CartContext);

    const handleRemove = () => {
        console.log(bookData.id);
        setCartItems(cartItems.filter((item) => item.id !== bookData.id));
    }

    const handleClick = () => {
        // console.log(bookData.number);
        const phoneNumber = bookData.number;
        const message = `Hi, I am interested in the book "${bookData.book_name}". Can you provide more details`;
        const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        console.log("Whatspp link:" ,link);
        window.location.href = link;
        
    }

    return (
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={bookData.book_url} alt="cart-item-img" className="cart-item-img" />
            </div>
            <div className="cart-item-content-container">
                <h2>{bookData.book_name}</h2>
                <p>{bookData.author_name}</p>
                <h3 className="cart-item-price">&#8377;{bookData.price}</h3>

                <button onClick={handleRemove} className='delete_btn'>Remove from Cart</button>
                <button className='delete_btn' onClick={handleClick}>Contact Seller</button>
            </div>
        </section>
    )
}

export default CartItemCard;