import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './component/home'
import Contact from "./component/contact";
import Newnews from "./component/newnews";
import ShowNews from "./component/showNews";
import EditNews from "./component/editNews";
import NavBar from "./component/navBar";
import {Container} from 'react-bootstrap';
import Toast from './component/utils/Toast';
import NoPage from "./component/noPage";


const Approutes = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Toast/>
       <Container>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path='/news/new' element={<Newnews/>}/> 
            <Route path='/news/:id' element={<ShowNews/>}/> 
            <Route path='/news/:id/edit' element={<EditNews/>}/>
            <Route path='*' element={<NoPage/>}/>  
        </Routes>
       </Container>
    </BrowserRouter >
  );
};

export default Approutes
