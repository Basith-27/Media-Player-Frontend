import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddVideo from '../components/AddVideo'
import View from '../components/View'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {

  const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({})

  return (
    <div className='home py-5'>
      <div className="container mb-5 d-flex justify-content-between align-items-center gap-3 flex-wrap">
        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='d-flex align-items-center gap-2'>
          <FaArrowLeftLong />
          <span>Back to Main</span>
        </Link>
        <div className="add-videos">
          <AddVideo setUploadVideoServerResponse={setUploadVideoServerResponse} />
        </div>
        <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }} className='d-flex align-items-center gap-2'>
          <span>Watch History</span>
          <FaArrowRightLong />
        </Link>
      </div>

      <div className='container video-container'>
        <div className='d-flex flex-column gap-4'>
          <h3>All Videos</h3>
          <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
      </div>
    </div>
  )
}

export default Home