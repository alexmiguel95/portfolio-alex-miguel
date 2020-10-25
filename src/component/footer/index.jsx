import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin} from 'react-icons/fi';

const Footer = () => {
    return(
        <StyledDivMainContainer>
            <div className='container'>
                <div className='links'>
                    <nav>
                        <ul>
                            <li><a href=''>Fale Comigo</a></li>
                            <li><a href=''>Trabalhos</a></li>
                            <li><a href=''>Sobre</a></li>
                        </ul>
                    </nav>
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
            </div>
        </StyledDivMainContainer>
    );
}

export default Footer;


const StyledDivMainContainer = styled.div`
    background-color: white;

    .container{
        padding: 0 15px 15px 15px;

        .links{
            nav ul{
                list-style-type: none;
                padding: 0;

                li{
                    padding-top: 10px;

                    a{
                        color: black;
                    }
                }
            }
        }

        .footer{
            display: flex;
            justify-content: space-between;

            nav{
                display: inline-block;

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
    }
`;