import React from 'react'
import { FaArrowLeftLong, FaTrash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const History = () => {
    return (
        <div className='history'>
            <div className='container d-flex mt-5 mb-5 justify-content-between align-items-center'>
                <h3>Watch History</h3>
                <Link to={'/home'} style={{ textDecoration: 'none', fontSize: '20', color: 'white' }} className='d-flex align-items-center gap-2'>
                    <FaArrowLeftLong />
                    <span>Back to Home</span>
                </Link>
            </div>

            <div className='table-responsive'>
                <table className='table table-dark container mt-5 mb-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Caption</th>
                            <th>URL</th>
                            <th>Time Stamp</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Figma Tutorial</td>
                            <td>https://www.youtube.com/embed/cTUD_vCrY7M</td>
                            <td>10/10/2023, 03:17:03 PM</td>
                            <td><div className='text-danger'><FaTrash /></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History