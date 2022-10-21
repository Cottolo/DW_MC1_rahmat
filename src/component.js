import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Data from './data'

function Component() {
    const navigate = useNavigate();

    const handleNaviateToDetail = () => {
      navigate("/detail/id");
    };

  return (
    Data.map((i)=>(
    <div key={i.id} className='component mb-5 my-auto d-flex mx-auto'>
        <Link to={'/detail/'+i.id}>
        <img 
        onClick={handleNaviateToDetail}
        className='h-100 rounded-circle ' src={i.image} alt='photos'></img>
        </Link>
        <div className='ms-5'>
            <h5>{i.name}</h5>
            <h6>followers : {i.follower}</h6>
        </div>
    </div>
    ))
  )
}

export default Component