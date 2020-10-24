import React from 'react';
import styled from 'styled-components';

const MyPhoto = () => {
    return(
        <StyledFigure>
            <img src="#" alt="Foto Alex Miguel"/>
        </StyledFigure>
    );
}

export default MyPhoto;


const StyledFigure = styled.figure`
    height: 425px;
    width: 305px;
    box-shadow: 3px 2px 30px 0px rgba(50, 50, 50, 0.1);
    margin: 0;
    
    /* Mobile */
    @media(max-width: 992px){
        height: 225px;
        width: 300px;
        margin: 0 auto;
    }
`;
