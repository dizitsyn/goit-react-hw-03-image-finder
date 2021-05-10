import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';




const ImageGallery = ({images,largeImgHendler}) => {
    return (
        <ul className="ImageGallery">
            <ImageGalleryItem images={images}
            largeImgHendler={largeImgHendler}
            
            />

        </ul>
    );
}

export default ImageGallery;