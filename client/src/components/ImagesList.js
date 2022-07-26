import React from 'react';

const imageList = ({ images, title }) => {
    if (!images.length) {
        return <h3>No images Yet</h3>;
    }

    return (
        <div>
            <h3 className="text-primary">{title}</h3>
            <div className="flex-row justify-space-between my-4">
                {images &&
                    images.map((image) => (
                        <div key={image} className="col-12 col-xl-6">
                            <div className="card mb-3">
                                <h4 className="card-header bg-dark text-light p-2 m-0">
                                    {image} <br />
                                </h4>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default imageList;
