import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';
import { getRestuarants } from './Actions/restAction';
import { useDispatch, useSelector } from 'react-redux';





function Restaurent() {
    // const [restList,setRest]=useState([])
    //api to access data
    // const getData=async()=>{
    //     const result=await fetch('/restaurants.json') 
    //     result.json().then(data=>setRest(data.restaurants))
    // }
    // console.log(restList);
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getRestuarants)
        // getData()
    },[])

const {restList}=useSelector(state=>state.reducer1)
console.log(restList);

  return (
    <Row className='ms-5'>
      {
        restList.map(item=>(
         <Col lg={4} md={6} className='py-3 px-5'>
            <Link to={`/viewRest/${item.id}`} id='l1'>
              <Card id='c1' style={{ width: '18rem' }}>
              <Card.Img style={{height:"15rem"}} variant="top" src={item.photograph} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                 {item.address}
                </Card.Text>
              </Card.Body>
            </Card>
            </Link>
         </Col>
    
        ))
      }
    </Row>
  )
}

export default Restaurent
