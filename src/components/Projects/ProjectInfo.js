import React from 'react'
import {useLocation} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function ProjectInfo(state) {
  const location=useLocation();
  console.log(location.state)
 
  return (
    <div style={{marginTop:"150px",padding:"1%"}}>
    <h1 className='purple' style={{marginLeft:"auto",marginRight:"auto",color:"white"}}><u>{location.state.name} Preview</u></h1>
    <br/>
    <Carousel variant="dark" style={{width:"70vw",marginLeft:"auto",marginRight:"auto",marginTop:"2%",marginBottom:"2%",boxShadow:"2px 2px 50px purple"}}>
    {
            location.state.imgs.map (content =>(
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={content}
                  alt="First slide"
                />
              </Carousel.Item>
            ))
          }
    </Carousel>
    <br/>
    <br/>
    </div>
  )
}

export default ProjectInfo