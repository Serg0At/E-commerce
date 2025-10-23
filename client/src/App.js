import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Section1 from "./pages/Section1";
import Section2 from './pages/Section2';
import Section3 from './pages/Section3';
import Section4 from './pages/Section4';
import Section5 from './pages/Section5';
import Footer from './pages/Footer';
import Katalog2 from './pages/variety/Katalog2';
import Katalog1 from './pages/variety/Katalog1';
import Contact from './pages/variety/Contact';
import Pay from './pages/variety/Pay'



  class App extends React.Component{
    render(){
      return(
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
        <Route path="/Katalog1" element={<Katalog1 />}/>
        <Route path="/Katalog2" element={<Katalog2 />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Pay" element={<Pay />}/>
        <Route path="/" element={<Section1 />}/>
        <Route path="Section2" element={<Section2 />}/>
        <Route path="/" element={<Section3 />}/>
        <Route path="/" element={<Section4 />}/>
        <Route path="/" element={<Section5 />}/>
        <Route path="/" element={<Footer />}/>
        </Route>
      </Routes>
    </BrowserRouter>
      )
    }
  }

export default App;
