import React from 'react'
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from '../../components/layouts/footer/Footer';

const Tecomp = () => {
    return(<>
    <Navbar darkTheme={true} />
        <div class="card-container">
    
    <div class="card">
        <h3>Theoretical Computer Science</h3>
        <p>Introduction to Automata Theory, Languages and Computation - John E. Hopcroft, Rajeev Motwani, Jeffery D. Ullman, 3rd Edition, Pearson Education, 2008.</p>
        <p>Theory of Computation - Michael Sipser, 3rd Edition, Cengage Learning, 2013.</p>
        <p>Theory of Computation - Vivek Kulkarni, Illustrated Edition, Oxford University Press, 2013.</p>
        <p>Introduction to Languages and the Theory of Computation - J. C. Martin, 4th Edition, Tata McGraw Hill Publication, 2013.</p>
        <p>Theory of Computation: A Problem Solving Approach - Kavi Mahesh, Wiley-India, 2011.</p>
    </div>

   
    <div class="card">
        <h3>Software Engineering</h3>
        <p>Software Engineering: A Practitioner's Approach - Roger Pressman, 9th Edition, McGraw-Hill Publications, 2019.</p>
        <p>Software Engineering - Ian Sommerville, 9th Edition, Pearson Education, 2011.</p>
        <p>Software Engineering Fundamentals - Ali Behfrooz and Fredeick J. Hudson, Oxford University Press, 1997.</p>
        <p>The Unified Modeling Language User Guide - Grady Booch, James Rambaugh, Ivar Jacobson, 2nd Edition, Pearson Education, 2005.</p>
    </div>

    
    <div class="card">
        <h3>Computer Network</h3>
        <p>Computer Networks - A.S. Tanenbaum, 4th Edition, Pearson Education.</p>
        <p>Data Communications and Networking - B.A. Forouzan, 5th Edition, TMH.</p>
        <p>Computer Networking: A Top-Down Approach Featuring the Internet - James F. Kurose, Keith W. Ross, 6th Edition, Addison Wesley.</p>
        <p>An Engineering Approach To Computer Networking - S. Keshav, Pearson.</p>
        <p>Computer Networks: Principles, Technologies & Protocols for Network Design - Natalia Olifer & Victor Olifer, Wiley India, 2011.</p>
        <p>Computer Networks: A Systems Approach - Larry L. Peterson, Bruce S. Davie, Second Edition, The Morgan Kaufmann Series in Networking.</p>
    </div>

   
    <div class="card">
        <h3>Data Warehousing & Mining</h3>
        <p>Data Warehousing: Fundamentals for IT Professionals - Paulraj Ponniah, Wiley India.</p>
        <p>Data Mining Concepts and Techniques - Han, Kamber, Morgan Kaufmann, 2nd Edition.</p>
        <p>Data Mining Introductory and Advanced Topics - M.H. Dunham, Pearson Education.</p>
        <p>Data warehousing - Reema Theraja, Oxford University Press, 2009.</p>
        <p>Introduction to Data Mining - Pang-Ning Tan, Michael Steinbach and Vipin Kumar, Pearson Publisher, 2nd Edition.</p>
        <p>Data Mining - Ian H. Witten, Eibe Frank and Mark A. Hall, Morgan Kaufmann, 3rd Edition.</p>
    </div>


    <div class="card">
        <h3>Web Technology</h3>
        <p>Developing Web Applications - Ralph Moseley, M.T. Savliya, Willy India, Second Edition, ISBN: 978-81-265-3867-6.</p>
        <p>Web Technology Black Book - Dremtech Press, First Edition, 978-7722-997.</p>
        <p>Learning PHP, MySQL, JavaScript, CSS & HTML5 - Robin Nixon, O'REILLY, 2014.</p>
        <p>Internet and World Wide Web - How To Program - Harvey & Paul Deitel & Associates, Fifth Edition, Pearson Education, 2011.</p>
        <p>Database System Concepts - Korth, Siberchatz, Sudarshan, 6th Edition, McGraw Hill.</p>
        <p>Fundamentals of Database Systems - Elmasri and Navathe, 5th Edition, Pearson Education.</p>
        <p>Principles of Distributed Database Systems - Ozsu, M. Tamer, Valduriez, Patrick, 3rd Edition, Pearson Education, Inc.</p>
        <p>NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence - Jeff Friesen, Addison Wesley/ Pearson.</p>
        <p>Java XML and JSON - Jeff Friesen, Second Edition, 2019, après Inc.</p>
    </div>

   
    <div class="card">
        <h3>System Programming and Compiler Construction</h3>
        <p>Systems programming and Operating Systems - D. M Dhamdhere, Tata McGraw Hill, Revised Second Edition.</p>
        <p>Compilers Principles, Techniques and Tools - A. V. Aho, R. Shethi, Monica Lam, J.D. Ulman, Pearson Education, Second Edition.</p>
        <p>Lex & YACC - John R. Levine, Tony Mason & Doug Brown, O ‘Reilly publication, Second Edition.</p>
        <p>Compiler construction - D, M. Dhamdhere, Macmillan publication, Second Edition.</p>
    </div>

   
    <div class="card">
        <h3>Cryptography & System Security</h3>
        <p>Cryptography and Network Security, Principles and Practice - William Stallings, 6th Edition, Pearson Education, March 2013.</p>
        <p>Cryptography & Network Security - Behrouz A. Ferouzan, Tata McGraw Hill.</p>
        <p>Cryptography and Network Security - Behrouz A. Forouzan & Debdeep Mukhopadhyay, 3rd Edition, McGraw Hill.</p>
        <p>Applied Cryptography, Protocols Algorithms and Source Code in C - Bruce Schneier, Second Edition, Wiley.</p>
    </div>

    
    <div class= "card">
        <h3>Mobile Computing</h3>
        <p>Mobile Communication - Jochen Schilller, Addision Wesley, Pearson Education.</p>
        <p>Wireless Communications & Networks - William Stallings, Second Edition, Pearson Education.</p>
        <p>An Introduction to LTE: LTE, LTE-Advanced, SAE and 4G Mobile Communications - Christopher Cox, Wiley publications.</p>
        <p>Mobile Computing - Raj Kamal, 2/e, Oxford University Press-New.</p>
    </div>

    
    <div class="card">
        <h3>Artificial Intelligence</h3>
        <p>Artificial Intelligence: A Modern Approach - Stuart J. Russell and Peter Norvig, Fourth Edition, Pearson Education, 2020.</p>
        <p>Artificial Intelligence - Saroj Kaushik, Cengage Learning, First edition, 2011.</p>
        <p>Artificial Intelligence - George F Luger, Low Price Edition, Fourth edition, Pearson Education, 2005.</p>
        <p>Principles of Artificial Intelligence - Nils J. Nilsson, Narosa Publication.</p>
    </div>

    <div class="card">
        <h3>Internet of Things (IoT)</h3>
        <p>IoT Fundamentals - Networking Technologies, Protocols, and Use Cases for the Internet of Things - David Hanes, Gonzalo Salgueiro, Patrick Grossetete, Rob Barton, Jerome Henry, 1st Edition, Pearson Education, Inc.</p>
        <p>The Internet of Things - Connecting Objects to the Web - Hakima Chaouchi, 1st Edition, Wiley, 2010.</p>
        <p>Internet of Things For Architects - Perry Lea, 1st Edition, Packt Publication, 2018.</p>
        <p>Internet of Things – Hands-On Approach - Arshdeep Bahga, Vijay Madisetti, 2nd Edition, Universities Press, 2016.</p>
    </div>

    <div class="card">
        <h3>Digital Signal & Image Processing</h3>
        <p>Digital Signal Processing: Principles, Algorithms, and Applications - John G. Proakis, Dimitris and G .Manolakis, 4th Edition, Pearson Education, 2007.</p>
        <p>Digital Signal Processing - A. Anand Kumar, 2nd Edition, PHI Learning Pvt. Ltd. 2014.</p>
        <p>Digital Image Processing - Rafel C. Gonzalez and Richard E. Woods, Pearson Education Asia, 4th Edition, 2018.</p>
        <p>Digital Image Processing - S. Sridhar, 2nd Edition, Oxford University Press, 2012.</p>
    </div>

 
    <div class="card">
        <h3>Quantitative Analysis</h3>
        <p>Basic Statistics - Agarwal, B.L., Wiley Eastern Ltd., New Delhi, 2006.</p>
        <p>Statistical Methods - Gupta, S. P., Sultanchand & Sons, New Delhi, 2011.</p>
        <p>Statistics for Economics Students - Sivathanupillai, M & Rajagopal, K. R., 1979.</p>
        <p>An Introduction to Mathematical Statistics - Hogg, R.V. and Craig, A.T., Amerind publications, 2006.</p>
        <p>Comprehensive Statistical Methods - Arora, P.N., Sumeet Arora, S. Arora, Sultan Chand, New Delhi, 2007.</p>
    </div>
</div>
<Footer />
</>
    )
}

export default Tecomp;