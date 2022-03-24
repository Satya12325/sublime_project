import { useState, useEffect,useRef} from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo,getTodo } from "../Redux/add/action";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";
import axios from "axios";
import "./Signup.css";
import {useNavigate} from "react-router-dom"

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [detail, setDetails] = useState();
    const [error, setError] = useState("");
    const neviget = useNavigate();
    const dispatch = useDispatch(); 
    const todos = useSelector((state) => state.add.todos);

    const hanleget = () =>{
        dispatch(getTodo)
    }
    const fetchData = () => {
        return axios.get("http://localhost:3000/data")
     }
    const details = async() => {
        try {
           const da = await fetchData()
            setDetails(da.data)
            console.log(da.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        
        hanleget()
        details();
    },[])
    const handleLogin = ()=>{
        let r =0;
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (!regEx.test(email) && email !== "") {
            // alert("Email is Not Valid");
            setError("please enter a valid email address")
            return false;
          }
        else{
          setError("");
        } 
       // else {
        //   setMessage("");
        // }
            for(let i=0; i<detail.length; i++) {
                if(detail[i].email === email && detail[i].password === password){
                    r=1;
                    neviget(`/profile/${detail[i].id}`)
                    // alert("log in successfull")
                }
            }
            if(r === 0){
                alert("please enter your email or password correctly")
                
            }
           
            console.log("login")
            
    }
    // console.log(detail.length+"details")

    return (
        <div>
            <div style={{ height:"220px",width:"30%",border: "1px solid gray", display: "flex",flexDirection: "column",margin:"auto",padding: "20px",marginTop: "20px",justifyContent: "space-between",borderRadius:"10px"}}>
                <div>

                Email
                <br/>
                <input 
                className="inputs"
                type="email" 
                placeholder="Enter your Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <p style={{color: 'red',marginTop: "1px",fontSize:"12px"}}>{error}</p>
                </div>
                <div>

                Password<br/>
                <input
                className="inputs"
                placeholder="Enter your Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                </div>
                 <button
            className="btn"
            onClick={handleLogin}
            >Login</button>
            </div>

        </div>
    )
}