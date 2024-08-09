import { Card, Modal } from 'react-bootstrap'
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import axios from '../api/axios'

function VideoCard({ video, onDelete, setDeleteVideoStatus }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => setShow(true);


    const handleDelete = async () => {
        try {
            await axios.delete(`/api/videos/${video.id}`);
            onDelete(video.id);
            setDeleteVideoStatus(true)
        } catch (error) {
            console.error('Failed to delete video', error);
        }
    };

    // Check if the video URL is from YouTube
    const isYouTubeUrl = video?.videoUrl.includes("youtu.be");

    const getEmbedUrl = (url) => {
        const videoId = url.split('youtu.be/')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (

        <>
            <Card className='mb-3 video-card'>
                <Card.Img variant="top" height={'180px'} onClick={handleShow} src={video?.imageUrl} />
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-center'>
                        <h6>{video?.caption}</h6>
                        <div style={{ cursor: 'pointer' }} className='text-danger' onClick={handleDelete} title='Delete video'><FaTrash /></div>
                    </Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} className="custom-modal">
                <Modal.Header>
                    <Modal.Title>{video?.caption}</Modal.Title>
                    <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body>
                    {isYouTubeUrl ? (
                        <iframe
                            width="100%"
                            height="360"
                            src={getEmbedUrl(video?.videoUrl)}
                            title={video.caption}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <video
                            width="100%"
                            height="360"
                            controls
                            poster={video?.imageUrl}
                        >
                            <source src={video?.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VideoCard