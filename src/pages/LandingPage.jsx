import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { Card } from 'react-bootstrap';

const LandingPage = () => {

    const navigate = useNavigate()

    return (
        <div className='container py-5 d-flex flex-column gap-5'>
            <div className='hero-section row d-flex align-items-center mb-5'>
                <div className="col-md-6">
                    <h1>Welcome to <span className='brand'>Media Player</span></h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, enim quam. Itaque quisquam voluptatibus vitae nisi animi mollitia laudantium quas officiis, corrupti, voluptatem adipisci aliquid harum perferendis at aliquam porro!</p>
                    <Button variant="contained" className='my-5 button' endIcon={<FaArrowRight />} onClick={() => navigate('/home')}>
                        Get Started
                    </Button>
                </div>
                <div className="col-md-6 d-flex hero-right">
                    <img className='img-fluid' src="https://i.pinimg.com/originals/58/02/b3/5802b3d1ef9db4ddee6f8ad3d88e85ce.gif" alt="landing" />
                </div>
            </div>
            <section className='features'>
                <h3 className='text-center'>Features</h3>
                <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-center flex-wrap w-100 gap-5'>

                    <div>
                        <Card className='card' style={{ maxWidth: '22rem' }}>
                            <Card.Img width={'100px'} height={'250px'} variant="top" src="https://i.pinimg.com/originals/c8/aa/ba/c8aaba17c72d3b373a7b31806696e091.gif" />
                            <Card.Body>
                                <Card.Title>Managing Videos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card className='card' style={{ maxWidth: '22rem' }}>
                            <Card.Img width={'100px'} height={'250px'} variant="top" src="https://i.pinimg.com/originals/d7/a9/95/d7a995f34f372832860215bbe65f2cc1.gif" />
                            <Card.Body>
                                <Card.Title>Categorize Videos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card className='card' style={{ maxWidth: '22rem' }}>
                            <Card.Img width={'100px'} height={'250px'} variant="top" src="https://i.gifer.com/origin/91/9186eb0e475eeff5c6856e8ed43eb31e_w200.gif" />
                            <Card.Body>
                                <Card.Title>Watch History</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>

            <section className='card-lg border rounded border-secondary mb-5 d-flex align-items-center gap-3 justify-content-between w-100'>
                <div className='card-container d-flex gap-5'>
                    <div>
                        <h2 className='mb-4'>Simple, Fast and Powerful</h2>
                        <h6 className='mb-3'><span className='fs-5 fw-bold'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi similique laudantium? Assumenda aliquam enim dolorum</h6>
                        <h6 className='mb-3'><span className='fs-5 fw-bold'>Categorize Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi similique laudantium? Assumenda aliquam enim dolorum</h6>
                        <h6><span className='fs-5 fw-bold'>Managing History</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi similique laudantium? Assumenda aliquam enim dolorum </h6>
                    </div>
                    <div className='w-100'>
                        <iframe width="100%" height="380" src="https://www.youtube.com/embed/cTUD_vCrY7M" title="Interactive UI/UX Crash Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage