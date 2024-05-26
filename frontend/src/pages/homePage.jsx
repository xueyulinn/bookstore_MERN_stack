import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookTable from '../components/bookTable.jsx'
import BookCard from '../components/bookCard'
import Spinner from '../components/spinner.jsx'
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';

const homePage = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  // useEffect is used to sychronize the component 
  // with external systems (not controlled by react)
  useEffect(() => {
    setLoading(true);

    // fecting data
    axios.get('http://localhost:5555/books')
      .then((response) => {
        /*if returns successfully */
        // response.data is the response result
        // response.data.data is the data contents
        setBooks(response.data.data);
        setLoading(false)
      }).catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        (showType === 'table' ? (<BookTable books={books} />):(<BookCard books={books} />))
      )}
    </div>
  )
}

export default homePage