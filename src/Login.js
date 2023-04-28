
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./Login.css";
function Login() {
  const[email,setEmail] = useState('');
  const [password,setPassword] =useState('');
  const[name,setName]=useState('');
  const [profilePic, setProfilePic] =useState('');
  const dispatch = useDispatch();

  const register =(e)=>{
    // e.preventDefault();
    if(!name){
      return alert("please enter a full name!");
    }
      auth.createUserWithEmailAndPassword(email, password).then(
        (userAuth) => {
          userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:name,
                photoUrl: profilePic,
              })
            );
          });
        }).catch(error => alert(error.message));
  }
  const loginToApp =(e)=>{
   e.preventDefault();

   auth.signInWithEmailAndPassword(email, password).then(userAuth => {
    dispatch(login({
      email:userAuth.user.email,
      uid: userAuth.user.uid,
      displayName: userAuth.user.displayName,
      profileUrl: userAuth.user.photoUrl,
    }))
   }).catch(error => alert(error));
  };
  return (
    <div className="login">
      <img src="" alt="" />
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)}type="text" placeholder='full name required if registeering' />
        <input value={profilePic} onChange={
          (e) => setProfilePic(e.target.value)
        } placeholder='profile pic Url(optional)' type='text' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' type="email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type='password'/>
        <button type="submit" onClick={loginToApp}>sign in</button>
      </form>
      <p>Not a member?(" ")<span className='="login__register'
      onClick={register}>Reegister now</span></p>
    </div>
  )
}

export default Login