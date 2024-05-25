import { BsArrowLeft } from "react-icons/bs";
import React from 'react'
import { Link } from "react-router-dom";
const backarrow = ({destination = '/'}) => {
  return (
    <div className="flex">
        <Link to={destination} className="bg-sky-800 text-white px-4 py-1 rounded-1g w-fit">
            <BsArrowLeft className="text-2xl"></BsArrowLeft>
        </Link>
    </div>
  )
}

export default backarrow