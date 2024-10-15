import React, { useState, useEffect, createContext } from "react";
import {Routes, Route } from 'react-router-dom';
import app from "./firebase/Firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import CartPage from "./pages/cartpage/CartPage";
import BookDetailsPage from "./pages/bookdetailspage/BookDetails";
import Login from "./pages/loginpage/Login";
import SignUp from "./pages/signup-page/Signup";
import ScrollToTop from "./components/util/ScrollToTop";
import SearchPage from "./pages/searchpage/SearchPage";
import Syllabus from "./pages/syllabus/Syllabus";
import All from "./pages/first/All";
import Ce from "./pages/fourth/Ce";
import Aids from "./pages/fourth/Aids";
import FourthEcs from "./pages/fourth/Ecs";
import Mech from "./pages/fourth/Mech";
import Seaids from "./pages/second/Seaids";
import Secomp from "./pages/second/Secomp";
import Seecs from "./pages/second/Seecs";
import Semech from "./pages/second/Semech";
import Teaids from "./pages/third/Teaids";
import Tecomp from "./pages/third/Tecomp";
import Teecs from "./pages/third/Teecs";
import Temech from "./pages/third/Temech";

export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {
    const auth = getAuth(app);

    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    

    useEffect(() => {
        onAuthStateChanged( auth, (user) => {
            if(user) {
                setAuthenticatedUser(user);
            } else {
                setAuthenticatedUser(null)
            }
        })
    })

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total = total + parseInt(item.price);
        })

        setTotalAmount(total);
    },[cartItems])

    return(
        <ScrollToTop>
            <UserContext.Provider value = {authenticatedUser}>
                <CartContext.Provider value={{cartItems, totalAmount, setCartItems}}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/books" element={<BooksPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/book-details/:id" element={<BookDetailsPage/>} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/syllabus" element={<Syllabus />} />
                        <Route path="/all" element={<All />} />
                        <Route path="/ce" element={<Ce />} />
                        <Route path="/aids" element={<Aids />} />
                        <Route path="/ecs" element={<FourthEcs />} />
                        <Route path="/mech" element={<Mech />} />
                        <Route path="/secomp" element={<Secomp />} />
                        <Route path="/seaids" element={<Seaids />} />
                        <Route path="/seecs" element={<Seecs />} />
                        <Route path="/semech" element={<Semech />} />
                        <Route path="/Tecomp" element={<Tecomp />} />
                        <Route path="/Teaids" element={<Teaids />} />
                        <Route path="/Teecs" element={<Teecs />} />
                        <Route path="/Temech" element={<Temech />} />                        

                    </Routes> 
                </CartContext.Provider>
            </UserContext.Provider>
        </ScrollToTop>
    )
}

export default App;