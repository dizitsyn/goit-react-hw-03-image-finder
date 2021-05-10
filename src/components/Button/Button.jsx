import React from 'react'

const Button = ({onLoadMore, images}) => {
   
    

    return (
        images.length>0 && <button type='button' className='Button' onClick={ onLoadMore}> Load more</button>
    );
}

export default Button;