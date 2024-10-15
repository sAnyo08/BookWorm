import React from 'react'
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';

const Teecs = () => {
    return(
        <>
        <Navbar darkTheme={true} /> 
        <div class="card-container">
    <div class="card">
      <h3>Communication Engineering</h3>  
      <p>Simon Haykin, “Communication System”, John Wiley And Sons ,4th Ed</p> 
      <p>Taub Schilling & Saha, “Principles Of Communication Systems”, Tata Mc-Graw Hill, Third Ed</p>   
      <p>Kennedy and Davis “Electronics Communication System”, Tata McGraw Hill </p> 
      <p>T. L. Singal, “Analog and Digital Communication,” Tata Mc-Graw Hill, New Delhi, First Edition, 2012</p>    
      <p>Sklar B, and Ray P. K., “Digital Communication: Fundamentals and Applications,” Pearson, Dorling Kindersley (India), Delhi, Second Edition, 2009. </p>      
      
    
    </div>
    <div class="card">
        <h3>Computer Organization and Architecture</h3>  
        <p>William Stallings, “Computer Organization and Architecture: Designing for Performance”, Eighth Edition, Pearson. </p> 
        <p>C. Hamacher, Z. Vranesic and S. Zaky, "Computer Organization", McGraw Hill,2002.  </p>   
        <p>William Stallings, Operating System: Internals and Design Principles, Prentice Hall, 8th Edition </p> 
        <p>Abraham Silberschatz, Peter Baer Galvin and Greg Gagne, Operating System Concepts, John Wiley &Sons, Inc., 9th Edition, 
           Programme Structure for Bachelor of Engineering (B.E.) – Electronics and Computer Science
           (Rev. 2019) 'C' Scheme 12 UNIVERSITY OF MUMBAI, B.E (ELECTRONICS AND COMPUTER SCIENCE </p>    
        <p>Andrew Tannenbaum, Operating System Design and Implementation, Pearson, 3rd Edition </p>      
        
    </div>   
     
    <div class="card">
        <h3>Software Engineering </h3>  
        <p>Roger S Pressman “Software Engineering: A Practitioner’s Approach” 8th Edition McGrawHill, ISBN:978-0-07-802212-8 </p> 
        <p>Pankaj Jalote, "An integrated approach to Software Engineering", Springer/Narosa Programme Structure </p>
        <p>Jibitesh Mishra and Ashok Mohanty, “Software Engineering”, Pearson edition </p>
        <p>Rajib Mall, "Fundamentals of Software Engineering", Prentice Hall India </p> 
        <p>Hans Van Vilet, “Software Engineering Principles and Practice” 3rd edition Wiley</p>
        
    </div> 
    <div class="card">
        <h3>Web Technologies</h3>  
        <p>Ralph Moseley, M.T. Savliya , “Developing Web Applications”, Willy India, Second Edition,   </p> 
        <p>“Web Technology Black Book”, Dreamtech Press, First Edition, 978-7722-997 </p>   
        <p>Robin Nixon, "Learning PHP, MySQL, JavaScript, CSS & HTML5" Third Edition,O'REILLY,2014  </p>
        <p>Professional Rich Internet Applications: AJAX and Beyond, Dana Moore, Raymond Budd, Edward Benson, Wiley publications.  </p> 
        <p>Martin Bean, “Laravel 5 Essentials”, PACKT Publishing Ltd  </p>
        
      
    </div> 
    <div class="card">
      <h3>Embedded Systems and RTOS </h3>  
       <p>Dr. K. V. K. K. Prasad, “Embedded Real Time System: Concepts, Design and Programming”, Dreamtech, New Delhi, Edition2014. </p> 
       <p>Rajkamal, “Embedded Systems: Architecture, Programming and Design”, McGraw Hill Education (India) Private Limited, New Delhi, 2015, 3rd Edition.  </p>
       <p>Sriram Iyer, Pankaj Gupta, “Embedded Real Time Systems Programming”, Tata McGraw Hill Publishing Company ltd., 2003.  </p>
       <p>Joseph Yiu, “The Definitive guide to ARM CORTEX-M3 & CORTEX-M4 Processors”, Elsevier, 2014, 3rd Edition.  </p>
       <p>David Simon, “An Embedded Software Primer”, Pearson,2009 </p>
      
    </div> 
    <div class="card">
        <h3>Artificial Intelligence  </h3> 
        <p> Stuart J. Russell and Peter Norvig, "Artificial Intelligence A Modern Approach ―Second Edition" Pearson Education. </p>
        <p> Elaine Rich and Kevin Knight ―Artificial Intelligence‖ Third Edition, Tata McGraw-Hill Education Pvt. Ltd., 2008</p>
        <p> George F Luger “Artificial Intelligence” Low Price Edition, Pearson Education., Fourth edition.</p>
        <p> Ivan Bratko “PROLOG Programming for Artificial Intelligence”, Pearson Education, Third Edition</p>
        <p> N. P. Padhy, “Artificial Intelligence and Intelligent Systems”, Oxford University Press.</p>
    </div>
    <div class="card">
        <h3>Computer Networks </h3>  
        <p> Andrew S Tanenbaum, Computer Networks -, 4th Edition, Pearson Education  </p> 
        <p> Behrouz A. Forouzan, Forouzan Mosharrat, Computer Networks A Top down Approach, McGraw Hill education  </p>   
        <p> Ranjan Bose, Information Theory, Coding and Cryptography, Ranjan Bose, Tata McGraw Hill, Second Edition. </p>
        <p> Muhammad H. Rashid, “Microelectronics Circuits Analysis and Design”, Cengage   </p> 
        <p> S. Salivahanan, N. Suresh Kumar,“Electronic Devices and Circuits”, Tata McGraw Hill.  </p>
        
    </div>  
    
    <div class="card">
        <h3>Data Warehousing and Mining</h3>
        <p>Paulraj Ponniah, “Data Warehousing: Fundamentals for IT Professionals‖”, Wiley India. </p>
        <p>Han, Kamber, "Data Mining Concepts and Techniques", Morgan Kaufmann  </p>
        <p>Reema Theraja,” Data warehousing, Oxford University Press.  </p>
        <p>M.H. Dunham, “Data Mining Introductory and Advanced Topics", Pearson Education.</p>
        <p>Ian H. Witten, Eibe Frank and Mark A. Hall, "Data Mining ", 3rd Edition Morgan Kaufmann publisher. </p>
    </div>
</div>
<Footer />
</>
    )
}

export default Teecs;