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
                    <>
                    <table>
                        <thead>
                            <th scope='col'>Title</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Votes Received</th>
                            <th scope='col'>Edit</th>
                            <th scope='col'>Delete</th>
                        </thead>
                        <tbody>
                            {images.map(image => {
                                return (
                                    <>
                                    <td>{image.title}</td>
                                    <td>{image.description}</td>
                                    <td>{image.voters? 0 : image.voters.length}</td>
                                    <td>Edit Btn</td>
                                    <td>Delete Btn</td>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                    </>
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
                {votes ? (
                    <>
                    <table>
                        <thead>
                            <th scope='col'>Title</th>
                            <th scope='col'>Artist</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Votes Received</th>
                            <th scope='col'>Unvote</th>
                        </thead>
                    </table>
                    <tbody>
                        {votes.map(vote => {
                            return (
                                <>
                                <td>{vote.votedImage.title}</td>
                                <td>{vote.votedImage.User[0].username}</td>
                                <td>{vote.votedImage.description}</td>
                                <td>{vote.votedImage.voters? 0 : vote.votedImage.voters.length}</td>
                                <td>Unvote Btn</td>
                                </>
                            )
                        })}
                    </tbody>
                    </>
                ) : (
                    <div className='container text-center'>
                        <h4>You did't vote any image yet.</h4>
                        <h4>Help artists with your vote.</h4>
                        <Link to={"/VoteHere"}>
                            <button className='btn btn-primary'>Vote here.</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Profile;

