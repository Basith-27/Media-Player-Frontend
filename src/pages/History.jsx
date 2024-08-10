import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong, FaTrash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import axios from '../api/axios'

const History = () => {

    const [history, setHistory] = useState([]);

    const fetchHistory = async () => {
        try {
            const response = await axios.get('/api/watchhistory');
            setHistory(response.data);
        } catch (error) {
            console.error('Failed to fetch history', error);
        }
    };

    const deleteHistoryItem = async (id) => {
        try {
            await axios.delete(`/api/watchhistory/${id}`);
            setHistory(history.filter(item => item.id !== id));
        } catch (error) {
            console.error('Failed to delete history item', error);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

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
                        {history.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.caption}</td>
                                <td><a href={item.url} target='_blank' rel='noopener noreferrer'>{item.url}</a></td>
                                <td>{new Date(item.timestamp).toLocaleString()}</td>
                                <td>
                                    <div className='text-danger' onClick={() => deleteHistoryItem(item.id)}>
                                        <FaTrash style={{cursor: 'pointer'}} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History