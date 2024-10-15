import React from 'react'
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from '../../components/layouts/footer/Footer';
import "../first/All.css"

const Aids = () =>{
    
    return(<>
    <Navbar darkTheme={true}/>
        <div class="card-container">

    <div class="card">
        <h3>Deep Learning</h3>
        <p>Ian Goodfellow, Yoshua Bengio, Aaron Courville. ―Deep Learningǁ, MIT Press Ltd, 2016</p>
        <p>Li Deng and Dong Yu, ―Deep Learning Methods and Applicationsǁ, Publishers Inc.</p>
        <p>Satish Kumar "Neural Networks A Classroom Approach" Tata McGraw-Hill</p>
        <p>JM Zurada ―Introduction to Artificial Neural Systemsǁ, Jaico Publishing House</p>
        <p>M. J. Kochenderfer, Tim A. Wheeler. ―Algorithms for Optimizationǁ, MIT Press</p>
    </div>

    <div class="card">
        <h3>Big Data Analytics</h3>
        <p>Anand Rajaraman and Jeff Ullman ―Mining of Massive Datasetsǁ, Cambridge University Press</p>
        <p>Alex Holmes ―Hadoop in Practiceǁ, Manning Press, Dreamtech Press</p>
        <p>Dan Mcary and Ann Kelly ―Making Sense of NoSQLǁ – A guide for managers and the rest of us, Manning Press</p>
        <p>References:</p>
        <p>1. Bill Franks, ―Taming The Big Data Tidal Wave: Finding Opportunities In Huge Data Streams With Advanced Analyticsǁ, Wiley</p>
        <p>2. Chuck Lam, ―Hadoop in Actionǁ, Dreamtech</p>
    </div>

    <div class="card">
        <h3>Advanced Artificial Intelligence</h3>
        <p>Foster, D., 2022. Generative deep learning. "O'Reilly Media, Inc."</p>
        <p>Koller, D. and Friedman, N., 2009. Probabilistic graphical models: principles and techniques. MIT press</p>
        <p>Goodfellow, I., 2016. Deep Learning-Ian Goodfellow, Yoshua Bengio, Aaron Courville- Google Books</p>
        <p>Murphy, K.P., 2012. Machine learning: a probabilistic perspective. MIT press</p>
        <p>Zhou, Z.H., 2012. Ensemble methods: foundations and algorithms. CRC press</p>
    </div>

</div>
<Footer />
</>
    )
}

export default Aids;