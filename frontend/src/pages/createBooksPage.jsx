import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/spinner';
import BackButton from '../components/backarrow';

const createBooksPage = () => {
  const navigate = useNavigate('/');
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');

  const HandleSave = () => {
    setLoading(true)

    const data = {
      title,
      author,
      publishYear
    }

    axios.post('http://localhost:5555/books', data).then(() => {
      setLoading(false);
      navigate('/');
    }).catch((error) => {
      setLoading(false)
      console.log(error)
    })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Add a New Book</h1>
      {loading ? (<Spinner />) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>

          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>

          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>PublishYear</label>
            <input
              type='text'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
            />
          </div>

          <button className='p-2 bg-sky-300 m-8' onClick={HandleSave}>
            Save
          </button>

        </div>
      )}
    </div>

  )
}

export default createBooksPage