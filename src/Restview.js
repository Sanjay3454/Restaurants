import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Operatingtime from './Operatingtime';

import { MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox } from 'mdb-react-ui-kit';

import { Col, ListGroup, Row } from 'react-bootstrap'
import Review from './Review';
import { useSelector } from 'react-redux';


function Restview() {
  // const [restList,setRest]=useState([])
  //api to access data
  // const getData=async()=>{
  //     const result=await fetch('/restaurants.json') 
  //     result.json().then(data=>setRest(data.restaurants))
  // }
  const params = useParams()
    console.log(params.id);

    const {restList}=useSelector(state=>state.reducer1)
  // console.log(restList);
  const singleRest=restList.find(i=>i.id==params.id)
  console.log(singleRest);

  useEffect(()=>{
 

  },[])


    
  return (
    
    <>
    {
       singleRest?(
<MDBContainer fluid className="p-3 my-5">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src={singleRest.photograph} class="img-fluid" alt="Phone image" />
  </MDBCol>

  <MDBCol col='4' md='6'>
    <ListGroup className=''>
      <ListGroup.Item> <h1 className='text-warning'> {singleRest.name}</h1> </ListGroup.Item>
      <ListGroup.Item>{singleRest.address}</ListGroup.Item>
      <ListGroup.Item>{singleRest.neighborhood}</ListGroup.Item>
      <ListGroup.Item>{singleRest.cuisine_type}</ListGroup.Item>
      <ListGroup.Item> 
        <Operatingtime workingTime={singleRest.operating_hours}/>
        <Review reviewList={singleRest.reviews}/>
      </ListGroup.Item>

     
    </ListGroup>
 

  </MDBCol>

</MDBRow>

</MDBContainer>

    ):""
       }
    </>
       
  )
}

export default Restview
