// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignupForm from './components/signup';
import LoginForm from './components/login';
import FetchData from './components/FetchData';
import User from './components/getUser/User';
import Edit from './components/updateuser/Edit';



const App = () => {
  return (
    <Routes>
            <Route path="/" element={<SignupForm />}/>
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/fetch" element={<FetchData/>}/>
      <Route path='/userdata' element={<User/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
  );
};

export default App;
