/* eslint-disable*/
import logo from './logo.svg';
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import React, {useContext, useState} from 'react';
import data from "./data.js";
import Detail from "./Detail.js";
import Cart from "./Cart.js";
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';

import './App.css';

export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(data);
  let [loading, loading변경] = useState(false);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail/0">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     {/* 메인페이지 */}
    <Switch>
      <Route exact path="/">

      <div className='jumbo'>
        <div className='jumbo_div'>
          <h1>20% Season Off</h1>
          <p>
            very cheap
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </div>
      </div>

      <div className='container'>

        <재고context.Provider value={재고}>

        <div className='row'>
          {
          shoes.map(function (a, i) {
            return (
            <Card 신발정보={shoes[i]} i={i} key={i} />
            );
          })
          }
        </div>

        </재고context.Provider>

        <button className='btn btn-primary' onClick={() => {

          loading변경(true);

          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{

            shoes변경( [...shoes, ...result.data] );
            console.log(result);

            loading변경(false);
          }) // ajax가 성공

          .catch(()=>{

            console.log("실패띠");

            loading변경(false);
          }) // ajax가 실패
          

        }}>더보기</button>

        {
        loading === true
        ? <h3>로딩중</h3>
        : null
        }
        
      </div>
      </Route>

      <Route exact path="/cart">
        <Cart/>
      </Route>
      

        {/* 디테일 페이지 */}

      <재고context.Provider value={재고}>

      <Route exact path="/detail/:id"> 
        <Detail shoes = {shoes} 재고 = {재고} 재고변경 = {재고변경}/>
      </Route>

      </재고context.Provider>

      </Switch>
    </div>
  );
}

function Card(props){

  let 재고 = useContext(재고context);

  return(
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%"/>
      <h4>{props.신발정보.title}</h4>
      <p>{props.신발정보.content} & {props.신발정보.price}</p>
      <Test i = {props.i}></Test>
    </div>
  )
}

function Test(props){

  let 재고 = useContext(재고context);

  return <p>재고 : {재고[props.i]}</p>
}

export default App;
