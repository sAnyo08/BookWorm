import React from 'react'
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from '../../components/layouts/footer/Footer';
import "../first/All.css"

const  FourthEcs = () => {
    return(<>
    <Navbar darkTheme={true}/>
        <div className='card-container'>
<div class="card">   
    <h3>VLSI Design </h3>    
    <p>CMOS Digital Integrated Circuits Analysis and Design, Sung-Mo Kang and Yusuf Leblebici, Tata McGraw Hill, Revised 4thEdition.  </p> 
    <p>Introduction to VLSI Circuits and Systems, John P. Uyemura, Wiley India Pvt. Ltd. </p>
    <p>Sorab K. Gandhi, “VLSI Fabrication Principles”, Wiley, Student Edition. </p>
    <p>Digital Integrated Circuits: A Design Perspective, Jan M. Rabaey, Anantha ChandrakasanBorivoje Nikolic, Pearson Education, 2nd Edition  </p>
    <p>Basic VLSI Design, Douglas A Pucknell, Kamran Eshraghian, Prentice Hall of India Private Ltd.  </p>
</div>
<div class="card">
    <h3>Internet of Things   </h3> 
    <p>Arshdeep Bahga and Vijay Madisetti, “Internet of Things: A Hands-on Approach, Universities Press.  </p> 
    <p>Raj Kamal, “ Internet of Things: Architecture and Design Principles”, McGraw Hill Education ,First edition  </p>
    <p>David Hanes ,Gonzalo salgueiro“IoT Fundamentals Networking Technologies, Protocols and Use Cases for Internet of Things”, Cisco Press, Kindle 2017 Edition</p>
    <p>Andrew Minteer ,”Analytics for the Internet of Things(IoT)”, Kindle Edition   </p>
    <p>Adrian McEwen, Hakim Cassimally, : Designing the Internet of Things”, Paperback, First Edition </p>  
</div>

<div class="card">
    <h3>Robotics </h3> 
    <p> Robert Shilling, “Fundamentals of Robotics - Analysis and control, Prentice Hall of India, 2009   </p>
    <p> Saeed Benjamin Niku, “Introduction to Robotics – Analysis, Control, Applications”, Wiley India Pvt. Ltd., Second Edition, 2011</p>
    <p> John J. Craig, “Introduction to Robotics – Mechanics & Control”, Third Edition, Pearson Education, India, 2009</p>
    <p> Mark W. Spong , Seth Hutchinson, M. Vidyasagar, “Robot Modeling & Control ”, </p>
    <p> Mikell P. Groover et.al, ”Industrial Robots-Technology, Programming & applications”, McGraw Hill , New York, 2008  </p>
</div>
</div>
<Footer />
</>
    )
}

export default FourthEcs;