

import React from 'react';
import About from './component/about/About';
import Header from './component/Header/Header';
import TodoApp from './component/TodoApp';
import {BrowserRouter as Router, Route}  from 'react-router-dom';

export default () =>{
    return(
      

        <Router>
            <Header></Header>
            <Route path="/" exact component={TodoApp}></Route>
            <Route path="/about" component={About}></Route>
            
        </Router>
       

    )
};
 


 
