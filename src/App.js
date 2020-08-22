import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect }  from 'react';

const nayoks = ['bappi', 'Razzak', 'Shakib', 'bavpaRaz', 'ferdos'];

const products = [
  {name:'protoShop', price:'$90.99'},
  {name:'Ilistator', price: '$30.00'},
  {name: 'addoba', price: '$50.99'},
  {name: 'Addoba El', price:'$179.99'}
]
const friends = [
  {name: 'rumi'},
  {name: 'aoyan'},
  {name: 'tusar'}, 
  {name: 'badhon'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person.</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map(nay => <li>{nay}</li>)}
          {products.map(pd => <li>{pd.name}</li>)}
        </ul>
          {
            products.map(prod => <Product product={prod}></Product>)
          }
          {
            friends.map(bondhu => <Friend friend={bondhu}></Friend>)
          }
          <Person name = "manna" job="football"></Person>
          <Person name="Abu Horain" job='Programming'></Person>
          <Person name='Sakib' job="software"></Person>
          <Person name= 'Rumi' job="Web develop"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
    
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [] )

  return(
    <div>
      {
        console.log(users)
      }
      <h1>Dynamic Users {users.length}</h1>
      {
        <ul>
          {users.map(user => <li>{user.name}</li>)}
        </ul>
      }
    </div>
  )
}

function Product(props){
  const productStyle = {
    backgroundColor:'lightgray',
    border:'gray',
    borderRadius:'10px',
    width:'200px',
    height:'200px',
    margin:'10px'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){

  return (
    <div style={{border:'2px solid yellow', margin:'10px', width:"400px"}}>
      <h3>Name : {props.name}</h3>
      <p>profession : {props.job}</p>
    </div>
  )
}

function Friend(props){
  const {name} = props.friend;
  return(
    <div style={{border:'2px solid green', margin:'10px', width:"400px"}}>
    <h3>Name : {name}</h3>
  </div>
  )
}

export default App;
