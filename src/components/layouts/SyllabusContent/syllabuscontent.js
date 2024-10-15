import React from "react";
import './syllabuscontent.css';
import { Link } from "react-router-dom";

const SyllabusContent = () => {
    return(
        <section className="card_section">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title"> First Year </h5>
      <Link to='/all' className="card-text"> Computer Engineering</Link>
      <p><Link to='/all' className="card-text"> Artificial Intelligence and Data Science</Link></p>
      <p><Link to='/all' className="card-text">Electronics and Computer Science</Link></p>
      <p><Link to='/all' className="card-text">Mechanical Engineering</Link></p>
    </div>
  </div>

  <div className="card">
    <div className="card-body">
      <h5 className="card-title"> Second Year </h5>
      <p><Link to="/secomp" className="card-text">Computer Engineering </Link></p>
      <p><Link to="/seaids" className="card-text">Artificial Intelligence and Data Science </Link></p>
      <p><Link to="/seecs" className="card-text">Electronics and Computer Science </Link></p>
      <p><Link to="/semech" className="card-text">Mechanical Engineering </Link></p>
    </div>
  </div>

  <div className="card">
    <div className="card-body">
      <h5 className="card-title"> Third Year </h5>
      <p><Link to="/tecomp" className="card-text" >Computer Engineering </Link></p>
      <p><Link to="/teaids" className="card-text">Artificial Intelligence and Data Science </Link></p>
      <p><Link to="/teecs" className="card-text">Electronics and Computer Science </Link></p>
      <p><Link to="/temech" className="card-text">Mechanical Engineering </Link></p>
    </div>
  </div>

  <div className="card">
    <div className="card-body">
      <h5 className="card-title"> Fourth Year </h5>
      <Link to="/Ce" className="card-text">Computer Engineering </Link>
      <p><Link to="/Aids" className="card-text">Artificial Intelligence and Data Science </Link></p>
      <p> <Link to="/Ecs"className="card-text">Electronics and Computer Science </Link></p>
      <p><Link to="/Mech" className="card-text">Mechanical Engineering </Link></p>
    </div>
  </div>
        </section>
    ); 
}

export default SyllabusContent;