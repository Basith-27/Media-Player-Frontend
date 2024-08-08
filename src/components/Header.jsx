import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SiGoogledisplayandvideo360 } from "react-icons/si";

const Header = () => {
    return (
        <Navbar className='navbar py-3'>
            <Container>
                <Navbar.Brand className='border-0'>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='fs-4 '>
                        <div className='d-flex align-items-center gap-2'>
                            <SiGoogledisplayandvideo360 />
                            <span>Media Player</span>
                        </div>
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header 