import React from 'react'
import { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap'; 
import { IoAddCircleSharp } from "react-icons/io5";

function AddVideo({setUploadVideoServerResponse}) {

  const [video,setVideo] = useState({
    id:"",caption:"",url:"",embedLink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <div className='add-btn d-flex align-items-center justify-content-center gap-2 border border-1 rounded py-2 px-3' onClick={handleShow}>
        <h5 className='mb-0'>Upload New Video</h5>
        <div className='fs-5'><IoAddCircleSharp /></div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Upload A Video</Modal.Title>
          <button type="button" class="btn-close btn-close-white" aria-label="Close" onClick={handleClose}></button>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details !!!</p>
          <Form className='py-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddVideo