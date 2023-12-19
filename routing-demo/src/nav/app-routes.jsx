import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from '../components/home.component';
import NumberDisplayComponent from '../components/number-display.component';

const AppRoutes = (props)=>{
    return(
        <Routes>
            <Route path='/' element={<h1>Base Path</h1>} />
            <Route path='/home' element={<HomeComponent />} />
            <Route path='/5' element={<NumberDisplayComponent dispNum={5} />} />
            <Route path='/7' element={<NumberDisplayComponent dispNum={7} />} />
            <Route path='/any/*' element={<HomeComponent />} />
        </Routes>
    )
}

export default AppRoutes;