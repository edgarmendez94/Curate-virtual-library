import React from "react";

const ImageList = ({ images, title }) => {
  console.log(images.length);
  if (!images.length) {
    return <h3 id="voteshere">No Profiles Yet</h3>;
  }


    return (
        <div>

            <h3 className="text-primary">{title}</h3>
            <div className="flex-row justify-space-between my-4">
                {images &&
                    images.map((image) => (
                        <div key={images._id} className="col-12 col-xl-6">
                            <div className="card mb-3">
                                <div key={image.fileName}>{image.fileName}</div>
                                <img src={"https://endoftheworld3.s3.amazonaws.com/" + image.fileName}></img>
                                {/* <img src="https://endoftheworld3.s3.amazonaws.com/844cd6ed7cbd1058a2fde000618a4371"></img> */}
                                This should be a single image subtext
                            </div>
                        </div>
                    ))}

            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageList;


{
  /* <img src={"https://curatebucket.s3.amazonaws.com/" + image.fileName}></img>  */
}

