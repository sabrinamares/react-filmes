import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'


import '../Styles/Pages/home.css';


function Home() {
  return (
    <div id="page-landing">
     <div className="content-wrapper">
        <main>
          <h1>O que eu faço para relaxar</h1>
          <p>meu jeitinho de procrastinar</p>
        </main>       

        <Link  to="/filmes" className ="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0 , 0, 0.6)"/>
        </Link>
     </div>
    </div>
  );
}

export default Home;