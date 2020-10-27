import React from 'react';
import styled from 'styled-components';
import MyPhoto from '../../component/my-photo';
import InfoContact from '../../component/info-contact';
import Presentation from '../../component/presentation';
import Contact from '../contact';
import Portfolio from '../portfolio';
import Resume from '../resume';
import { FiGithub, FiLinkedin} from 'react-icons/fi';

const Home = () => {
    return(
        <StyledDivMain>
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

                <div className='footer'>
                    <span>alexmiguel95@gmail.com</span>
                    <span>(41) 99876 9061</span>
                    <nav>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/alexmiguel95/" target="_blank">
                                    <FiLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/alexmiguel95" target="_blank">
                                    <FiGithub />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </ContainerMain>

            <Contact />

            <Portfolio />

            <Resume />
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
            width: 300px;
        }
    }

    .footer{
        margin: auto 0 15px 0;
        padding: 0 15px 0 15px;
        background-color: white;
        display: flex;
        justify-content: space-between;

        @media(min-width: 992px){
            display: none;
        }

        nav{
            display: inline-block;

            @media(max-width: 576px){
                display: none;
            } 

            ul{
                display: inline-block;
                padding: 0;
                margin: 0;

                li{
                    display: inline-block;

                    a{
                        color: rgba(0, 0, 0, 0.85);
                        font-size: 20px;

                        @media(min-width: 992px){
                            font-size: 25px;
                        }
                    }

                    a[href='https://www.linkedin.com/in/alexmiguel95/']{
                        margin-right: 8px;
                    }
                }
            }
        }
    }
`;
