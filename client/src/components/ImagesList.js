import React from 'react';

const ImageList = ({ images, title }) => {
    console.log(images)
    if (!images.length) {
        return <h3>No Profiles Yet</h3>;
    }


    return (
        <div>
            <h3 className="text-primary">{title}</h3>
            <div className="flex-row justify-space-between my-4">
                {images &&
                    images.map((image) => (
                        <div key={images._id} className="col-12 col-xl-6">
                            <div className="card mb-3">
                                <div>{image.fileName}</div>
                                This should be a single image subtext
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ImageList;