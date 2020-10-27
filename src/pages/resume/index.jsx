import React from 'react';
import StyledDivContainerMain from './styled';
import { HashLink as Link } from 'react-router-hash-link';

const Resume = () => {
    return(
        <div id="resume">
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
                                    <li><Link smooth to="#portfolio">Portfolio</Link></li>
                                    <li><Link smooth to="#contact" href='#'>Contato</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </StyledDivContainerMain>
        </div>
    );
}

export default Resume;
