import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [data,setData]=useState([]);

  useEffect(async()=>{
  await axios.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
    console.log(data)
  setData(data.data)
  }).catch((err)=>{
    console.log(err)
  })
  
    },[])

  return (
    <div >
      {
        data.map((item,index)=>{
        return(
         <div>
            <p>{ item.id}</p>
          <p> {item.title}</p>
         </div>
        )  
        })
      }
    </div>
  );
}

export default App;
