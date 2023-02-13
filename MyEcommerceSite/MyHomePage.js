import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import './MyEcommerceSite.css';

const MyHomePage = (props) => {

  // fetch('https://fakestoreapi.com/products/1')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  //   useEffect(
  // const fetchData = () =>{
  //   axios.get("https://fakestoreapi.com/products/")
  //   .then(res=>console.log(res))
  // }


  //  ,[] )

  const [count, setCount] =useState(0);
  const [items,setItems] = useState([]);
  // const [search,setSearch] = useState([])



 const fetchData = () =>{
    axios.get("https://fakestoreapi.com/products/")
    .then(res=>setItems(res.data))
    // .then(res=>console.log(res.data))
   
 }
//  https://fakestoreapi.com/products/categories



 const AddToCart = () =>{
  //  alert("hii")
 setCount(count + 1)
 }



 const Men = () =>{
  // fetchData();

 const filterMen = items.filter((item,i)=>{
    return item.category == "men's clothing" 
    // return i == 1
  })

  setItems(filterMen)
 }
 const Women = () =>{
  // fetchData();
  const filterWomen = items.filter((item,i)=>{
     return item.category == "women's clothing" 
     // return i == 1
   })
 
   setItems(filterWomen)
  }
  const Appliances = () =>{
    // fetchData();
    const filterAppliances = items.filter((item,i)=>{
       return item.category == "electronics" 
       // return i == 1
     })
   
     setItems(filterAppliances)
    }
   
 


  return (
<div>


<div>



<nav className="navbar navbar-expand-lg navbar bg-dark data-bs-theme='dark' " >
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">MyStore</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li onClick={fetchData} className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li onClick={Men} className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Men</a>
        </li>
        <li onClick={Women} className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Women</a>
        </li>
        <li  className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Sports</a>
        </li>
        <li onClick={Appliances} className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Appliances</a>
        </li>


   
    
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit"><FaCartPlus/> {count}  </button>
      </form>
    </div>
  </div>
</nav>

        
    </div>

{/* <button onClick={fetchData}>click me</button> */}
<div>
{
  items.map((item,i)=>{
    return (
       <p key={i}>
        <div id='myproducts'>
          <h4>{item.category}</h4>
        <img src={item.image} className="images" ></img> <br></br>
        <button id='addbtn' onClick={AddToCart}>Add to cart</button>

        </div>
       </p>
    )
  })
}

</div>

</div>

  )
}

export default MyHomePage;