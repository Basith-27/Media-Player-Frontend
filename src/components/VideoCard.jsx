import { Card, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import styled from 'styled-components';

function VideoCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => setShow(true);

    const CustomCloseButton = styled.button

    return (

        <>
            <Card className='mb-3 video-card'>
                <Card.Img variant="top" height={'180px'} onClick={handleShow} src="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png" />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-center'>
                        <h6>Video Caption</h6>
                        <div className='text-danger'><FaTrash /></div>
                    </Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} className="custom-modal">
                <Modal.Header>
                    <Modal.Title>Video Caption</Modal.Title>
                    <button type="button" class="btn-close btn-close-white" aria-label="Close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="360" src="https://www.youtube.com/embed/cTUD_vCrY7M" title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    {/* <iframe width="914" height="514" src="https://www.youtube.com/embed/cTUD_vCrY7M" title="Interactive UI/UX Crash Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoCard