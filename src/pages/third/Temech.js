import React from 'react'
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from '../../components/layouts/footer/Footer';
import "../first/All.css"

const Temech = () => {
    return(
        <>
        <Navbar darkTheme={true} />
        <div class="card-container">
        <div class="card">
            <h3>Mechanical Measurements and Controls</h3>
            <p>Engineering Metrology, I.C. GUPTA, Dhanpat Rai Publications</p>
            <p>Engineering Metrology, R. K. Jain, Khanna Publisher</p>
            <p>Measurement Systems: Applications and Design, EO Doebelin, 5th Edition, McGraw Hill</p>
        </div>
        <div class="card">
            <h3>Thermal Engineering</h3>
            <p>Fundamentals of Heat and Mass Transfer by F.P. Incropera and D P deWitt, Wiley India, 3rd Edition</p>
            <p>Introduction to Thermodynamics and Heat Transfer by Yunus A. Cengel, 2nd Edition, McGraw Hill</p>
            <p>Fundamentals of Heat and Mass Transfer, M. Thirumaleshwar, Pearson Education India, 2009</p>
        </div>
        <div class="card">
            <h3>Dynamics of Machinery</h3>
            <p>Theory of Machines, Thomas Bevan, CSB Publishers & Distributors</p>
            <p>Theory of Machines by Jagdishlal, Metropolitan Book New Delhi, Company, Daryaganj, Delhi</p>
            <p>Theory of Machines by S.S. Ratan, Tata McGraw Hill, New Delhi</p>
        </div>
        <div class="card">
            <h3>Finite Element Analysis</h3>
            <p>Textbook of Finite Element Analysis by Seshu P, Prentice Hall of India</p>
            <p>Finite Element Method by J N Reddy, TMH</p>
            <p>Introduction to Finite Elements in Engineering, Chandrupatla and Belegundu, Pearson Education</p>
        </div>
        <div class="card">
            <h3>Machine Design</h3>
            <p>Design of Machine Elements - V.B. Bhandari, Tata McGraw Hill Publication</p>
            <p>Design of Machine Elements - Sharma, Purohil, Prentice Hall India Publication</p>
            <p>Machine Design - An Integrated Approach - Robert L. Norton, Pearson Education</p>
        </div>
        <div class="card">
            <h3>Turbo Machinery</h3>
            <p>Thermal Engineering, Ajoy Kumar, G. N Sah, Narosa Publishing House, New Delhi</p>
            <p>Fluid Mechanics and Machinery; CSP Ojha, R. Berndtsson, Oxford University</p>
            <p>Fluid Mechanics and Fluid Machines by Gautam Biswas, S K Som, Suman Chakraborty - Tata McGraw-Hill Education Pvt. Ltd.</p>
        </div>
        <div class="card">
            <h3>Heating, Ventilation, Air Conditioning, and Refrigeration</h3>
            <p>Refrigeration and Air Conditioning by C.P. Arora, McGraw Hill Education (India) (P) Limited, New Delhi</p>
            <p>Principles of Refrigeration by Roy J. Dossat, Pearson Education, New Delhi</p>
            <p>Refrigeration and Air Conditioning by Manohar Prasad, New Age International (P) Limited, New Delhi</p>
        </div>
        <div class="card">
            <h3>Automation and Artificial Intelligence</h3>
            <p>Applied Mechatronics, A. Smaili and F. Mrad, Oxford University Press</p>
            <p>Mechatronics System Design, Shetty and Kolk, Cengage Learning, India Edition</p>
            <p>Mechatronics - Electronic Control Systems in Mechanical Engineering, Bolton, Pearson Education</p>
        </div>
    </div>
    <Footer />
    </>
    )
}

export default Temech;