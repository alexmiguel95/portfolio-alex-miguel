import React from 'react';
import { FiGithub, FiLinkedin} from 'react-icons/fi';
import styled from 'styled-components';

const InfoContact = () => {
    return(
        <StyledDivInfoContact>
            <h3>Email</h3>
            <h4>alexmiguel95@gmail.com</h4>
            <h3>Telefone</h3>
            <h4>(41) 99876 9061</h4>
            <h3>Redes Sociais</h3>
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
        </StyledDivInfoContact>
    );
}

export default InfoContact;


const StyledDivInfoContact = styled.div`
        display: inline-block;	
        margin-left: 25px;
        align-self: flex-end;

        h3, h4, a{
            color: white;
        }

        h3{
            margin: 0;
            font-weight: bold;
        }

        ul{
            padding: 0;
            margin-bottom: 10px;

            li{
                display: inline-block;

                a{
                    font-size: 25px;
                    padding-right: 10px;
                }
            }
        } 
`;
