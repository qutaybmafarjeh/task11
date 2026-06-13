import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Users() {

  const getUsers = async()=>{
    const response = await axios.get('http://ums12.runasp.net/api/users');
    return response.data;
  }

  const {data,isLoading,error}= useQuery({
    queryKey:['users'],
    queryFn:getUsers,
    staleTime:1000*60*5,
  });
  
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(error){
    return <h2>Error... {error}</h2>
  }

  const users = Array.isArray(data) ? data : data?.users ?? data?.Users ?? []

  return (

    <section className='users'>
      {users.map((user)=> <div key={user.id}>
        <h2>{user.name}</h2>
        <Link to={`/users/${user.id}`}>View Details</Link>
        </div>)}

       

    </section>
    
  )
}
