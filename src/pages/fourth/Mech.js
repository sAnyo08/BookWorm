import React from 'react'
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from '../../components/layouts/footer/Footer';
import "../first/All.css"

const Mech =() =>{

    return(<>
    <Navbar darkTheme={true}/>
        <div class="card-container">
            <div class="card">
                <h3>Design of Mechanical System</h3>
                <p>Machine Design Exercises, S.N. Trikha, New Delhi, Khanna Publisher, 1978</p>
                <p>Mechanical Engineering Design, Shigley J E and Mischke C R, 11th Edition 2019, McGraw Hill, ISBN: 9788184956207</p>
                <p>Mechanical Design Analysis, MF Spotts, 3rd Edition, Prentice Hall Inc.</p>
            </div>
            <div class="card">
                <h3>Logistics and Supply Chain Management</h3>
                <p>Essentials of Supply Chain Management, R.P. Mohanty, S.G. Deshmukh, 1st Edition 2004, Jaico Publishing House</p>
                <p>Logistics Management, S.K. Bhattacharya, 3rd Edition, Pearson Publication, ISBN: 9788131768624</p>
                <p>Supply Chain Management, Sunil Chopra, P. Meindl, 6th Edition 2016, Pearson Education Asia</p>
            </div>
            <div class="card">
                <h3>Design of Mechanical Systems</h3>
                <p>Machine Design Exercises by S.N. Trikha, Khanna Publications, Delhi</p>
                <p>Mechanical Engineering Design by Shigley J E and Mischke C R, McGraw Hill</p>
                <p>Mechanical Design Analysis by M.F. Spotts, Prentice Hall Inc</p>
            </div>
            <div class="card">
                <h3>Industrial Engineering and Management</h3>
                <p>Introduction to Work Study, ILO, Geneva, and Oxford & IBH Pub Co. Pvt. Ltd.</p>
                <p>Ergonomics at Work, Murrell</p>
                <p>Plant Layout and Material Handling, James M. Apple, John Wiley & Sons</p>
            </div>
            <div class="card">
                <h3>Power Engineering</h3>
                <p>Thermal Engineering, R.K. Rajput, Laxmi Publication</p>
                <p>Thermal Engineering, Kothandraman, Domkundwar, Khajuria, Arora, Dhanpatrai & Sons</p>
                <p>Steam and Gas Turbine, R. Yadav</p>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Mech;