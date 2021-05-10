import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import styled from 'styled-components'
import Loader from "react-loader-spinner"
import React from 'react'



let Loaderr = ({loading}) => {
  return (
      loading &&(<LoaderBox>
        <Loader
        
        type="Grid"
        color="#3f51b5"
        height={50}
        width={50}
        // timeout={3000} //3 secs
            />
     </LoaderBox>)    
    );
  }


export default Loaderr;

const LoaderBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

