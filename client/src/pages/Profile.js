import React, { useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
    const { data } = useQuery(GET_ME);
    useEffect(() => {
        if(data) {
            console.log(data);
        }
    }, [data]);

    console.log(data);
    return (
<<<<<<< HEAD
        <div>

            <div>Test Profile</div>
            <div>an uploaded image</div>
            <img src="/images/uploads/a8d85e00100b5678ae6e2629470d4b24"></img>

        </div>

    )
=======
        <div className='container'>
            
            <h1>My images</h1>
            <h1>My votes</h1>
        </div>
    );
>>>>>>> 93ab081ac3c76128ff3c0286fcd85c1cb38a3945
}


export default Profile;

