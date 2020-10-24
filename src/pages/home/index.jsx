import React from 'react';
import styled from 'styled-components';
import Header from '../../component/header';

const Home = () => {
    return(
        <StyledDiv>
            <Header />
        </StyledDiv>
    );
}

export default Home;


/* Styled Components */
const StyledDiv = styled.div`
    background-color: white;
    width: 100%;
`;