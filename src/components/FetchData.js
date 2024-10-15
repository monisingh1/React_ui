import React, { useState, useEffect } from "react";
import axios from "axios";
import "./fetchData.css"
import { useNavigate } from "react-router-dom";
 function FetchData() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

   useEffect(() => {
  const fetchData =async () =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setData(response.data)
  }
  fetchData()
   }, [])
   


  return (
    <div className="usersTable">
      <h1>Fetched Data from API</h1>
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
  
      
               <button type="submit" onClick={()=>{navigate('/userData')}}>Next</button>

    </div>
  );
}

export default FetchData;

















 




















 

 
