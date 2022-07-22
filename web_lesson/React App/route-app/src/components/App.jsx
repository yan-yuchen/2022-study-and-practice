import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Linux from './Linux';
import Django from './Django';
import Web from './Web';
import NotFound from './NotFound';
import WebContent from './WebContent'
import {Routes, Route, Navigate } from 'react-router-dom';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Linux' element={<Linux />}>
                            <Route path="homework" element={<h4>homework的内容</h4>}></Route>
                            <Route path="terminal" element={<h4>terminal的内容</h4>}></Route>
                            <Route path="*" element={<h4>其他</h4>}></Route>
                        </Route>
                        <Route path='/Django' element={<Django />} />
                        <Route path='/Web' element={<Web />} />
                        <Route path="/web/content" element={<WebContent />} />

                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<Navigate replace to="/404" />} />
                        {/* 使用Navigate组件可以重定向，除上面以外的4个页面全部指向404页面 */}
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;