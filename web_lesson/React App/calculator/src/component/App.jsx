import React, { Component } from 'react';
import NavBar from './NavBar';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './content/home';
import Calculator from './content/calculator';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFound';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/calculator' element={<Calculator />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/404' element={<NotFound />} />
                        {/* 重定向，不存在的页面指向404 */}
                        <Route path="*" element={ <Navigate replace to="/404" /> } />
                    </Routes>
                </div>

            </React.Fragment>
        );
    }
}
 
export default App;