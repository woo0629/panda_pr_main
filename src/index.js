import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/loginPage'
import Signup from './components/signUpPage'
import Novel from './components/novelContent'
import Category from './components/category'
import Detail from './components/detail'
import MyPage from './components/myPage'
import Board from './components/board'
import Terms from './components/terms';
import Policy from './components/policy';
import Teen from './components/teen';
import Enquiry from './components/enquiry';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/category' element={<Category />} />
        <Route path='/board' element={<Board/>} />
        <Route path='/category/novel' element={<Novel />} />
        <Route path='/category/novel/detail/:id' element={<Detail />}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/teen' element={<Teen/>}/>
        <Route path='/enquiry' element={<Enquiry/>}/>
        

      <Route path='*' element={<div>없는페이지에요</div>}/>
      </Routes>
      

    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
