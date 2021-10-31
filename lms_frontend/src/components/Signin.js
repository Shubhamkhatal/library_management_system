import React from 'react'

import Books from './Books';
import { useState,useEffect } from 'react';

export default function Signin() {
    const [admin, setadmin] = useState([])

  useEffect(() => {
		const apiUrl = `user`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((admin) => {
				setadmin(admin[0]);
			});
	}, []);
  const [user,setuser] = useState(false)
  const handlelogin = ()=>{
    if(admin.email === iemail &&  admin.password === ipassword)
    {
      setuser(true)
    }
    else
    {
        alert("Incorrect Email or password");
        window.location.reload();
    }
    
}
const handlemailChange = (event)=>{
    setIemail(event.target.value) 
}
const handlpassChange = (event)=>{
    setIpassword(event.target.value) 
}
const mystyle = {
  backgroundColor: "#95B4C8",
  height:"100%",
};
console.log(user)
const [iemail, setIemail] = useState(); 
const [ipassword, setIpassword] = useState(); 
if(user === true){
  return(
    <>
    <Books/>
    </>
  );
}
else
  return (
    <>
    <div>
    <h1 align="center" className="my-5">Library Management System</h1>
    <div className="py-5">
        <div align="center">
    <input value={iemail} onChange={handlemailChange} type="email" placeholder="Username" /><br/><br/>
    <input value={ipassword} onChange={handlpassChange} type="password" placeholder="Password"/><br/><br/>
    <button className="btn btn-lg btn-primary" onClick={handlelogin}>Login</button>
    </div> 
    </div>
    </div>
    </>
  );
}
