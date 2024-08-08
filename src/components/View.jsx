import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'


function View({ uploadVideoServerResponse }) {
    // state for variable scope 


    return (
        <>
            <Row>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <VideoCard />
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <VideoCard />
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <VideoCard />
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <VideoCard />
                </Col>
            </Row>
        </>
    )
}

export default View