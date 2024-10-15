import React from "react";
 import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import "./All.css";

// import { BookData } from "../../util/BookData";
import { Link } from "react-router-dom";

const All  = () => {
    return ( 
     <section>
        <Navbar darkTheme={ true } />
        <div className="card-container">
    <div className="card">
      <h3>Engineering Mathematics 1</h3>  
      <p className="info"><Link to='/book-details/7'> Higher Engineering Mathematics, Dr. B. S. Grewal, Khanna Publication</Link></p> 
      <p>Advanced Engineering Mathematics, Erwin Kreyszig, Wiley Eastern Limited, 9th Ed.</p>   
      <p>Engineering Mathematics by Srimanta Pal and Subodh,C. Bhunia, Oxford University Press </p> 
      <p>Elementary Linear Algebra with Application by Howard Anton and Christ Rorres. 6th edition.John Wiley & Sons, INC.</p>    
      <p>Applied Numerical Methods with MATLAB for Engineers and Scientists by Steven Chapra, McGraw Hill </p>      
      
    
    </div>
    <div className="card">
        <h3> Engineering Physics 1</h3>  
        <p><Link to='/book-details/6'>A text book of Engineering Physics-Avadhanulu&Kshirsagar, S. Chand</Link></p> 
        <p>A textbook of Optics - N. Subramanyam and Brijlal, S.Chand </p>   
        <p> Fundamentals of optics by Jenkins and White, McGrawHill  </p> 
        <p> Solid State Electronic Devices- B. G. Streetman, Prentice Hall Publisher </p>    
        <p> Modern Engineering Physics – Vasudeva, S.Chand </p>      
        
    </div>   
    <div className="card">
        <h3> Engineering Chemistry 1</h3>  
        <p> Engineering Chemistry - Jain & Jain (DhanpatRai) </p> 
        <p> Engineering Chemistry – Dara &Dara (S Chand)  </p>   
        <p> Engineering Chemistry - Wiley India (ISBN – 9788126519880) </p>
        <p> A Text Book of Engineering Chemistry – ShashiChawla (DhanpatRai)  </p> 
        <p>  Engineering Chemistry – Payal Joshi &Shashank Deep (Oxford University Press) </p>
        
    </div>   
    <div className="card">
        <h3> Engineering Mechanics</h3>  
        <p> Engineering Mechanics by R. C.Hibbeler</p> 
        <p> Engineering Mechanics by Beer &Johnston, Tata McGrawHill </p>   
        <p> Engineering Mechanics by F. L. Singer, Harper& RawPublication</p>
        <p> Engineering Mechanics by Macklin & Nelson, Tata McGrawHill  </p> 
        <p> Engineering Mechanics by ShaumSeries </p>
        
    </div> 
    <div className="card">
        <h3> Basic Electrical Engineering</h3>  
        <p> V. N. Mittal and Arvind Mittal ―Basic Electrical Engineering‖ Tata McGraw Hill, (Revised Edition) </p> 
        <p> Vincent Del Toro ―Electrical Engineering Fundamentals‖, PHI Second edition, 2011  </p>   
        <p> Edward Hughes ―Hughes Electrical and Electronic Technology‖, Pearson Education (Tenth edition)</p>
        <p> D P Kothari and I J Nagrath ―Theory and Problems of Basic Electrical Engineering‖, PHI 13th edition 2011 </p> 
        <p> B.R Patil ―Basic Electrical Engineering‖ Oxford Higher Education</p>
        
      
    </div> 
    <div className="card">
      <h3> Engineering Physics 2</h3>  
       <p>A text book of Engineering Physics-Avadhanulu&Kshirsagar, S.Chand</p> 
       <p>Optics - Ajay Ghatak, Tata McGraw Hill </p>
       <p>A textbook of Optics - N. Subramanyam and Brijlal, S.Chand </p>
       <p>Concepts of Modern Physics- ArtherBeiser, Tata Mcgraw Hill </p>
       <p>Introduction to Electrodynamics- D. J. Griffiths, Pearson publication </p>
      
    </div> 
    <div className="card">
        <h3> Engineering Maths 2</h3>  
      <p> Higher Engineering Mathematics, Dr. B. S. Grewal, Khanna Publication</p> 
      <p>Advanced Engineering Mathematics, Erwin Kreyszig, Wiley Eastern Limited, 9th Ed.</p>   
      <p>Engineering Mathematics by Srimanta Pal and Subodh,C. Bhunia, Oxford University Press </p> 
      <p>Elementary Linear Algebra with Application by Howard Anton and Christ Rorres. 6th edition.John Wiley & Sons, INC.</p>    
      <p>Applied Numerical Methods with MATLAB for Engineers and Scientists by Steven Chapra, McGraw Hill </p>      
    </div>
    <div className="card">
        <h3> Engineering Chemistry 2</h3>
        <p>Engineering Chemistry - Jain & Jain, DhanpatRai </p>
        <p>Engineering Chemistry – Dara & Dara, S Chand </p>
        <p>Green Chemistry: A textbook – V.K.Ahluwalia, Alpha Science International </p>
        <p>Fundamentals of Molecular Spectroscopy ( 4th Edition) - C.N.Banwell, Elaine M. McCash, Tata McGraw Hill. </p>
        <p>Elementary Organic Spectroscopy- Y.R.Sharma, S.Chand and Co</p>
    </div>
    <div className="card">
        <h3> Engineering Graphics </h3>    
        <p> N.D. Bhatt, "Engineering Drawing (Plane and solid geometry)", Charotar Publishing House Pvt. Ltd.</p> 
        <p>N.D. Bhatt & V.M. Panchal, "Machine Drawing", Charotar Publishing House Pvt. Ltd. Reference Books </p>
        <p>Narayana, K.L. & P Kannaiah (2008), Text book on Engineering Drawing, Scitech Publisher.</p>
        <p> Prof. Sham Tickoo (Purdue University) &GauravVerma, "( CAD Soft Technologies) : Auto CAD 2012 (For engineers and Designers)", Dreamtech Press NewDelhi. </p>
        <p> Dhananjay A Jolhe, "Engineering Drawing" Tata McGraw Hill.</p>
    </div>
   <div className="card">
        <h3>  C programming </h3> 
        <p> E. Balaguruswamy, Programming in ANSI C, McGraw-Hill</p> 
        <p>Kernighan , Ritchie, ―The C programming Language‖, Prentice Hall of India </p>
        <p>Sumitabha Das, Computer Fundamentals and C Programming, McGraw-Hill </p>
        <p> Pradeep Day and ManasGosh ,―Programming in C‖, Oxford University Press. </p>
        <p>Byron Gottfried, ―Programing with C‖, McGraw Hill ( Schaum‟s outline series)  </p>  
    </div>

    <div className="card">
        <h3> Professional Communication and Ethics </h3> 
        <p> Sanjay Kumar & Pushp Lata (2018). Communication Skills with CD. New Delhi: Oxford University Press. </p>
        <p>Hemphill, P.D., McCormick, D. W., & Hemphill, R. D. (2001). Business Communication with writing improvement exercises. Upper Saddle River, NJ: Prentice Hall.</p>
        <p>Locker, Kitty O. Kaczmarek, Stephen Kyo. (2019). Business Communication: Building Critical Skills. Place of publication not identified: Mcgraw-hill. </p>
        <p> 4. Murphy, H. (1999). Effective Business Communication. Place of publication not identified: Mcgraw-Hill.</p>
        <p> 5. Raman, M., & Sharma, S. (2016). Technical Communication: Principles and practice. New Delhi: Oxford University Press.</p>
    </div>
</div>
<Footer />
</section>
    ) 
} 

export default All;