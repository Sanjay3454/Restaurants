import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Review({reviewList}) {
  return (
    <div>
      <Accordion className='mt-5 p-3' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Reviews</Accordion.Header>
        <Accordion.Body>
        {
        reviewList.map(i=>
        <>
            <div>
                <h6>{i.name}</h6>
                <h6>{i.date}</h6>
                <h6>{i.rating}</h6>
                <p>{i.comment}</p>
            </div> 
            <hr />
        </>
        )
}
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  )
}

export default Review
