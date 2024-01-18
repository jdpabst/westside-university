import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default (
    <Routes>
        <Route exact path='/' element={ <Home /> } ></Route>
        <Route path='/about/*' element={ <About /> } ></Route>
        <Route path = '/classlist/:class' element={ <ClassList /> }></Route>
        <Route path='/student/:id' element={ <Student /> }></Route>
    </Routes>
)
