import React, { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
    const { data } = useQuery(GET_ME);
    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);

    console.log(data);
    return (
        <div className='container'>

            <h1>My images</h1>
            <h1>My votes</h1>
        </div>
    );
}


export default Profile;

