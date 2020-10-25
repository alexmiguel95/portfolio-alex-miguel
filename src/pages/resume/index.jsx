import React from 'react';
import styled from 'styled-components';
import StyledDivContainerMain from './styled';

const Resume = () => {
    return(
        <StyledDivContainerMain>
            <div className='container'>
                <div className='my-photo'>
                    <figure>
                        <img src='' alt='Foto Alex Miguel' />
                    </figure>
                </div>

                <div className='text'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                        unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged. 
                    </p>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                        unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged. 
                    </p>

                    <div className='links'>
                        <nav>
                            <ul>
                                <li><a href='#'>Meu currículo</a></li>
                                <li><a href='#'>Portfolio</a></li>
                                <li><a href='#'>Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </StyledDivContainerMain>
    );
}

export default Resume;
