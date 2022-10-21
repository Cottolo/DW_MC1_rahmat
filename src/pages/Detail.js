import React, { useEffect, useState } from 'react'
import Data from '../data';
import { Link, useParams } from 'react-router-dom';

function Detail() {
    const {id} = useParams();
   
  return (
    <div className="text-center w-100 mx-auto bg-light vh-100 ">
        <img className='rounded-circle w-25' src={Data[id-1].image}></img>
        <h1>{Data[id-1].name}</h1>
        <div className='d-flex mx-auto justify-content-center w-100 mt-5'>
            <h5 className='me-5'>{Data[id-1].follower}</h5>
            <h5>{Data[id-1].following}</h5>
        </div>
        <Link to='/'>
        <button className='bg-dark text-light -fw-bold fs-1 mt-5'>Back</button>
        </Link>
  </div>
  )
}

export default Detail