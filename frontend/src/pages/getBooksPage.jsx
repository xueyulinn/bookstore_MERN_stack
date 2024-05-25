import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/backarrow'
import Spinner from '../components/spinner'



const getBooksPage = () => {
  // book would be undefined if no values given to useState()
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  // console.log(`id is ${id}`)

  useEffect(() => {
    setLoading(true);

    axios.get(`http://localhost:5555/books/${id}`).then((response) => {

      setBook(response.data);

      setLoading(false);
    }
    ).catch((error) => {
      console.error(error);
      setLoading(false);
    })
  },[])


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading ? (<Spinner />) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-5000'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-5000'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-5000'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-5000'>publishYear</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-5000'>createdTime</span>
            <span>{book.createdAt}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-5000'>updatedTime</span>
            <span>{book.updatedAt}</span>
          </div>
        </div>
      )}

    </div>
  )
}

export default getBooksPage