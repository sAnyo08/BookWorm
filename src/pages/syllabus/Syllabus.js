import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import SyllabusContent from "../../components/layouts/SyllabusContent/syllabuscontent";
import Footer from "../../components/layouts/footer/Footer";


const Syllabus = () => {
    return (
        <section>
           <Navbar darkTheme={ true } />
           <SyllabusContent />
           <Footer />
        </section>
    )
}

export default Syllabus;