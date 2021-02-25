import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

/* var name = "sumi";
  var person = {
    prenome: "Sumi Murmu",
    job: "student ",
  };
  var singer = {
    prenome: "Sumi Murmu",
    job: "student ",
  };
 var style={
   color:'red',
   backgroundColor:'green'
 }
 
 // the below code shall be write inside the return 
  -- 
        <h1 style={style}>My heading : {(2 + 5) * 25}</h1>

        <h3> my object:{person.prenome + " " + person.job}</h3>
        <h3 style={{backgroundColor:'cyan', color:'yellow'}}>singer:{singer.prenome}</h3>
        <p>this is my first paragraph </p>
        (<div style={{border:'2px solid red', margin:'10px'}}>
 name={products[0].name} price= {products[0].price}
 
 
 */
function App() {
  const nayoks = ["Uzzol", "Sadhon", "luis", "ruben", "mathiyas"];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "ilastator", price: "$88.55" },
    { name: "pdf reder", price: "$55.44" },
    { name: "premiere EL", Price: "$249.99" },
  ];
  //const nayokNames = nayoks.map(nayok => nayok);
  //console.log(nayokNames);
  //const productName = products.map(product => product)
  //console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
        <p>this is my first react library </p>
        <Counter></Counter>
        <Users> </Users>

        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>
          <li>{nayoks[4]}</li>
        </ul>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}

        <Person name="Uzzol" mrs="Sumi" food="gongha"></Person>
        <Person name="sukuwa" mrs="sundori"></Person>
        <Person name="sadhon" mrs="keya"></Person>
      </header>
    </div>
  );
}
/*
function Counter() {
  const [count, setCount] =useState(10);
  //const handleIncrease = () => console.log('clicked');
  const handleIncrease = () => {
    //const newCount = count +1;
    //setCount(newCount);
    
    setCount(count +1);
  };

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}


  */ 
 function Counter() {
  const [count, setCount] =useState(10);
  const handleIncrease = () => setCount(count +1);
    
    
  
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() =>setCount(count -1)}>Decrease</button>
      <button onClick={() => setCount(count +1)}>Increase</button>
    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    //console.log('calling Effect');
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
   //.then(data => console.log(data));
   .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users{users.length}</h3>
     <ul>
     {
       users.map(user => <li>{user.email}</li> )
     }
     </ul>
     
    </div>
  )
  
}



function Product(props) {
  const productStyle = {
    border: "ipx solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    height: "200px",
    width: "200px",
    float: "left",
  };
  //const {name, price} = {name:'Photoshop', price:'$90.99'}
  const { name, price } = { name: "ilastator", price: "$88.55" };
  //console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>buy now</button>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid red",
    margin: "10px",
  };
  // console.log(props);
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>hero of {props.mrs}</h3>
    </div>
  );
}

export default App;
