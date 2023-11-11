
import './App.css';
import Blogg from './Blogg';
import Login from './Login';
import Page from './Page';
import Registerapi from './Registerapi';
import { Route,Routes, BrowserRouter } from "react-router-dom";
// import  } from 'react-router-dom';
import CreateBlog from './blogform';
import Navbar from './Navbar'
import React from 'react';





function App() {
  return (
    
      <React.Fragment>
        <header>
          <Navbar/>
        </header>
       <main>
        
        <Routes>        
         <Route path="/" Component={Page}></Route>
         <Route path="/register" Component={Registerapi}></Route>
         <Route path="/login" Component={Login}></Route>
         <Route path="/blog" Component={Blogg}></Route>
         <Route path="/addblog" Component={CreateBlog}></Route>
       </Routes>
      
       
       
       </main>
      
       
      </React.Fragment>
      
    
  );
}

export default App;
