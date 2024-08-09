import React from 'react'
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { IoAddCircleSharp } from "react-icons/io5";
import axios from '../api/axios'
import { v4 as uuidv4 } from 'uuid';

function AddVideo({ setUploadVideoServerResponse }) {

  const [video, setVideo] = useState({
    Id: "", Caption: "", ImageUrl: "", VideoUrl: ""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async () => {

    // Generate a unique ID and update the state with it
    const uniqueId = uuidv4();
    const newVideo = { ...video, Id: uniqueId };

    try {
      const response = await axios.post('/api/videos', newVideo);
      if (response.status === 201) {
        alert("Video Uploaded Successfully!");
        setUploadVideoServerResponse(response.data)
        handleClose();
      } else {
        alert(`Upload failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to upload video', error);
      alert("Failed to upload video. Please try again.");
    }
  }


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
          <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={handleClose}></button>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details !!!</p>
          <Form className='py-3'>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e) => setVideo({ ...video, Id: e.target.value })} />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e) => setVideo({ ...video, Caption: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e) => setVideo({ ...video, ImageUrl: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={(e) => setVideo({...video, VideoUrl: e.target.value})} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddVideo