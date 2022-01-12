import axios from "axios";
import React, { useContext, useEffect, useState } from "react"
import { Nav } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { 재고context } from './App.js';


let 박스 = styled.div`
  padding : 20px;

`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
`;

// class Detail2 extends React.Component{

//   componentDidMount(){

//   }

//   componentWillUnmount(){

//   }
// } 옛날 방식

// useEffect훅

function Detail(props) {

  let [alert, alert변경] = useState(true);
  let [input, input변경] = useState('');

  let 재고 = useContext(재고context);

  let [tab, tab변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  useEffect(() => {

    let 타이머 = setTimeout(() => { alert변경(false) }, 2000);

    return () => { clearTimeout(타이머) } //타이머 제거

  }, []);

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(x => x.id == id);
  let history = useHistory();

  var num = parseInt(찾은상품.id)

  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>


      {/* { input }

        <input onChange={(e)=>{ input변경(e.target.value) }}/> */}

      {

        alert === true

          ? <div className="my-alert">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>

          : null

      }
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (num + 1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>

          <Info 재고={props.재고}></Info>

          <button className="btn btn-danger" onClick={() => {

            var 재고 = [...props.재고]
            재고[0] = 재고[0] - 1;
            props.재고변경(재고)


          }}>주문하기</button>
          &nbsp;
          <button className="btn btn-danger" onClick={() => {
            history.goBack()
          }}>뒤로가기</button>
        </div>
      </div>


      <Nav className='mt-5' variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); tab변경(0) }}>0번째</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => { 스위치변경(false); tab변경(1) }}>1번째</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => { 스위치변경(false); tab변경(2) }}>2번째</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 스위치변경 = {스위치변경} tab = {tab}/>
      </CSSTransition>

    </div>
  )
}

function TabContent(props){

  useEffect(()=>{
    props.스위치변경(true);
  });

  if(props.tab === 0){

    return <div>0번째 내용입니다.</div>

  }else if(props.tab === 1){

    return <div>1번째 내용입니다.</div>

  } else if(props.tab === 2){

    return <div>2번째 내용입니다.</div>
    
  }


}

function Info(props) {
  return (
    <p>재고 : {props.재고[0]}</p>
  )
}

export default Detail;

