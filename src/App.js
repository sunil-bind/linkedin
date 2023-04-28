import React, { useEffect } from 'react';

import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from'./Feed';
import Widgets from './Widgets'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
const user = useSelector(selectUser)
const dispatch = useDispatch();

useEffect(()=>{
  auth.onAuthStateChanged((userAuth) => {
    if(userAuth){
      //user is logged in
      dispatch(login({
        emial:userAuth.em,
        uid:userAuth.uid,
        displayName:userAuth.displayName,
        photoUrl: userAuth.photoUrl,
      }))
    }
    else{
      dispatch(logout());
    }
  });

},[dispatch])

  return (
    <div className="app">
     
     {/* header */}
      <Header />  
      {!user ? (<Login />):(
     <div className="app__body">
      <Sidebar />
      <Feed />
      <Widgets />
     </div>
     )}
      {/* sidebar */}
      {/* feed */}
      {/* widgeets */}
    </div>
  );
}

export default App;
