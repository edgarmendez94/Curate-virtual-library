import React from 'react';
import ImageList from '../components/ImagesList'
import { useQuery } from '@apollo/client';
import { QUERY_IMAGES } from '../utils/queries';

const VoteHere = () => {
    const { data } = useQuery(QUERY_IMAGES);
    const images = data?.images || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                    {/* <img src="/images/81528e3e08121282df2b686ce807dc6d" alt="submitted by a user like you"></img> */}
                    <ImageList
                        images={images}
                        title="Here are all of the images submitted by users like you..."
                    />
                </div>
            </div>
        </main>
    );
};

export default VoteHere;