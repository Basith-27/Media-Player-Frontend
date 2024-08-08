import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer  pt-3'>
            <div className='d-flex flex-column align-items-center justify-content-center gap-3 py-4'>
                <h4>Media Player</h4>
                <small className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa earum omnis <br />reprehenderit. Vel deserunt fugit velit labore.</small>
                <div className='socials d-flex gap-3'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaGoogle />
                    <FaLinkedin />
                </div>
            </div>
            <hr />
            <div className='copyright py-2 text-center'>
                <small>Copyright &copy; Media Player. Designed By Basith</small>
            </div>
        </div>
    )
}

export default Footer