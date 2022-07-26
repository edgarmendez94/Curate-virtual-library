// import React from 'react'
// // import keyArr from '../../../server/server';

// export default function VoteHere() {
//     return (
//         <div>
//             <div>VoteHere</div>
//             <img src="/images/a0d690bb8950c339ea968bccf01b69ac"></img>
//         </div>
//     )
// }

import React from 'react';
import ImageList from '../components/ImagesList';
import { useQuery } from '@apollo/client';
import { QUERY_IMAGES } from '../utils/queries';

const VoteHere = () => {
    const { data } = useQuery(QUERY_IMAGES);
    const images = data?.images || [];

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ImageList
                            images={images}
                            title="Here's the current images..."
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default VoteHere;