import React from 'react';
import { Route } from 'react-router-dom';
import Logo from '../shared/logo/logo';
import './home.scss'
import Sidebar from './sidebar/sidebar';

function Home() {
  return (
    <div className="Home">
      <div className="home-container">
        <header>
          search here
        </header>
        <aside>
          <Sidebar />
        </aside>
        <main>
          movies table here
          <Route path="/home/movies" component={Logo} />
        </main>
      </div>
    </div>
  );
}

export default Home;
