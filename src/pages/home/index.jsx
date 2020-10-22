import React from 'react';
import styled from 'styled-components';
import Header from '../../component/header';
import MyPhoto from '../../component/my-photo';
import { Row, Col } from 'antd';

const Home = () => {
    return(
        <StyledDiv>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Header />
                </Col>
            </Row>
            <Row>
                <StyledCol xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className='container-info-contact'>
                        
                    </div>    
                    <MyPhoto />  
                </StyledCol>
		    </Row>
        </StyledDiv>
    );
}

export default Home;


/* Styled Components */
const StyledDiv = styled.div`
    background-color: white;
    width: 100%;
`;

const StyledCol = styled(Col)`
    --highlight-color: #4A38FF;

    .container-info-contact{
        height: calc(100vh - 126px);
        width: 400px;
        background-color: var(--highlight-color);

        @media(max-width: 992px){
            display: none;
        }
    }
`;