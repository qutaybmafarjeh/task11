import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetails() {

    const { id } = useParams();
    const getUsersDetails = async () => {
        const response = await axios.get(`https://ums12.runasp.net/api/users/${id}`);
        return response.data.data;
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ['user', id],
        queryFn: getUsersDetails,
        staleTime: 1000 * 60 * 5,
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }   
    if (error) {
        return <h2>Error... {error.message}</h2>
    }

    const user = data?.user ?? data?.User ?? data;

    return (
        <div>
       <h1>User Details</h1>
       <p>Name: {user?.name}</p>
       <p>Email: {user?.email}</p>
       <p>Age: {user?.age}</p>

       </div>
    )
}
