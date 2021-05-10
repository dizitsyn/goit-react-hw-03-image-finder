import React from 'react'
const ImageGalleryItem = ({images,largeImgHendler}) => {

    return (
        <>
            {images.map(({ id, webformatURL, tags,largeImageURL }) => (
                <li className="ImageGalleryItem" key={id}>
                <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" onClick={largeImgHendler} data-source={largeImageURL}/>
                </li>
            ))}
      </>
    );
}

export default ImageGalleryItem;