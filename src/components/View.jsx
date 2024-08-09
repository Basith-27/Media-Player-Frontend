import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { useEffect, useState } from 'react'
import axios from '../api/axios'


function View({ uploadVideoServerResponse }) {

    const [videos, setVideos] = useState([])
    const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

    const fetchVideos = async () => {
        try {
            const response = await axios.get('/api/videos');
            setVideos(response.data);
        } catch (error) {
            console.error('Failed to fetch videos', error);
        }
    };

    useEffect(() => {
        fetchVideos();
        setDeleteVideoStatus(false)
    }, [uploadVideoServerResponse, deleteVideoStatus]);

    const handleDelete = (videoId) => {
        setVideos(videos.filter(video => video.Id !== videoId));
    };

    return (
        <>
            <Row>
                {
                    videos.map((video, index) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={index}>
                            <VideoCard video={video} onDelete={handleDelete} setDeleteVideoStatus={setDeleteVideoStatus} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default View