import { useState, useEffect,useRef} from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo,getTodo } from "../Redux/add/action";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Signup.css"
import {useNavigate} from "react-router-dom"
import axios from "axios";

export default function Signup(){
    const [name,setName] = useState("");
    const [lname,setLName] = useState("");
    const [mobile,setMobile] = useState();    
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");   
    const [error, setError] = useState("");
    const [detail, setDetails] = useState();

    const neviget = useNavigate();
    const dispatch = useDispatch();    
      
    const fetchData = () => {
      return axios.get("http://localhost:3000/data")
   }
     
   const details = async() => {
    try {
       const data = await fetchData()
        setDetails(data.data)
        console.log(data.data)
    }
    catch (e) {
        console.log(e)
    }
}
      
      const handleAdd = ()=>{

          if(name===""|| mobile===""||email === "" ||password === ""){
            alert("Please fill all your details")  
            return false;
          }
          for(var i=0; i<detail.length; i++){
            if(detail[i].email=== email){
              alert("Your email id is already in use")
              setEmail("")
              return false;
            }
          }
          const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!regEx.test(email) && email !== "") {
            // alert("Email is Not Valid");
            setError("please enter a valid email address")
            return false;
          }
        else{
          setError("");
        } 
            const payload = {
                name:name,
                last_name: lname,
                mobile:mobile,                    
                email:email,
                password:password
            };
            const addTodoAction = addTodo(payload);
            dispatch(addTodoAction);
            neviget("/login")
      }


      // const handleShow = () =>{
      //     dispatch(getTodo)
      // }

      useEffect(() => {
        details();
      },[])



    return(
        <div style={{width:"30%",border: "1px solid gray", display: "flex",flexDirection: "column",height:"420px",margin:"auto",padding: "20px",marginTop: "20px",justifyContent: "space-between",borderRadius:"10px"}}>
           
                <div>
              First name  <br/>
                <input 
                placeholder="Enter your first name*"
                className="inputs" type="text" value={name} onChange={(e)=>setName(e.target.value)} />

                </div>
                <div>
              Last name  <br/>
                <input 
                placeholder="Enter your Last name*"
                className="inputs" type="text" value={lname} onChange={(e)=>setLName(e.target.value)} />

                </div>
                <div>
              Mobile  <br/>
                <input 
                placeholder="Enter your mobile number*"
                className="inputs" type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} />

                </div>                
               
            
          
        <div>
          Email id  <br/><input 
          placeholder="enter your email address*"
          className="inputs" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
         <p style={{color: 'red',marginTop: "1px",fontSize:"12px"}}>{error}</p>
        </div>
        <div>
          Password  <br/><input
          placeholder="Enter your password *"
          className="inputs" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
           
            <button
            className="btn"
            onClick={handleAdd}
            >Sign up</button>
           
        </div>
    )
}