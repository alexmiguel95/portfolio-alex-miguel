import React from 'react';
import styled from 'styled-components';
import Header from '../../component/header';
import MyPhoto from '../../component/my-photo';
import InfoContact from '../../component/info-contact';
import Presentation from '../../component/presentation';
import Footer from '../../component/footer';
import Contact from '../contact';
import Portfolio from '../portfolio';
import Resume from '../resume';

const Home = () => {
    return(
        <StyledDivMain>
            <Header />

            <ContainerMain>
                <div className='container-main-info-contact'>
                    <InfoContact />
                </div>

                <div className='container-main-my-photo'>
                    <MyPhoto />
                </div>

                <div className='container-main-presentation'>
                    <Presentation />
                </div>
            </ContainerMain>

            <Contact />

            <Portfolio />

            <Resume />

            <Footer />
        </StyledDivMain>
    );
}

export default Home;


/* Styled Components */
const StyledDivMain = styled.div`
    background-color: white;
`;

const ContainerMain = styled.div`
    --highlight-color: #4A38FF;

    display: flex;

    @media(max-width: 992px){
        flex-direction: column;	
    }

    .container-main-info-contact{
        height: calc(100vh - 126px);
        width: 400px;
        min-width: 400px;
        background-color: var(--highlight-color);
        display: flex;	

        @media(max-width: 992px){
            display: none;
        }
    }

    .container-main-my-photo{
        margin: -126px 0 0 -101px;
        align-self: center; 

          /* Mobile */
        @media(max-width: 992px){
            height: 200px;
            margin: 0 auto;
            margin-top: 40px;
        }
    }

    .container-main-presentation{
        align-self: center;
        margin-right: 25px;
        margin: -126px 25px 0 10%;

        @media(max-width: 992px){
            margin: 0 auto;
            margin-top: 60px;
            width: 300px;
        }
    }
`;
