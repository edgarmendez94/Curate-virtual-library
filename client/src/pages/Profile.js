import React, { useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
    const { data } = useQuery(GET_ME);
    const [username, setUsername] = useState("");
    const [images, setImages] = useState([]);
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        if (data) {
            console.log(data);
            setUsername(data.me.username);
            setImages(data.me.savedImages);
            setVotes(data.me.votedImages);
        }
    }, [data]);
    

    return (
        <div className='container'>
            {Auth.loggedIn() ? <></> : <Navigate to="/Login" />}
            <h1 className='text-center'>Hello. {username}</h1>
            <div className='container'>
                <h1>My images</h1>
                {images ? (
                    <div>

                    </div>
                ) : (
                    <div className="text-center">
                        <h4>You did't submit any image yet.</h4>
                        <h4>Let's share your awesome artworks.</h4>
                        <Link to={"/YourSubmission"}>
                            <button className='btn btn-primary'>Submit your work here.</button>
                        </Link>
                    </div>
                )}
            </div>
            <div className='container'>
                <h1>My votes</h1>
                <div className='container text-center'>
                {votes ? (
                    <h4>Working on progress</h4>
                ) : (
                    <>
                        <h4>You did't vote any image yet.</h4>
                        <h4>Help artists with your vote.</h4>
                        <Link to={"/VoteHere"}>
                            <button className='btn btn-primary'>Submit your work here.</button>
                        </Link>
                    </>
                )}
                </div>

            </div>
        </div>
    );
}


export default Profile;

