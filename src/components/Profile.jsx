import React, { useState, useRef } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Signup.css";
const fetchData = (id) => {
    return axios.get(`http://localhost:3000/data/${id}`)
 }
export default function Profile(){
    const [isLoding, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const { id } = useParams();
    const isMounted = useRef(null)
    const getProducts = async () => {
        try {
          setIsLoading(true);
          const { data } = await fetchData(id);
          if (!isMounted.current) {
            return;
          }
          setData(data);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };

      console.log(id,"useparams")
  useEffect(() => {
    // fetchProductDetail();
    getProducts();
    if (!isMounted.current) {
      isMounted.current = true;
    }
    return () => {
      isMounted.current = false;
    };

    // fetchData();
  }, [id]);
  console.log("data", data);
  if (isLoding) return <h3>...Loading</h3>;
return (
    <>
    <div className="profile">
        <h3>First Name : {data.name}  </h3>
        <h3>Last Name : {data.last_name}</h3>
        <h3>Email : {data.email}</h3>
        <h3>Mobile Number : {data.mobile}</h3>
        <img src={data.image} alt="" />
    </div>
    </>
)

}