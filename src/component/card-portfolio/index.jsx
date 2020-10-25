import React from 'react';
import StyledDivMainContainer from './styled';

const CardPortfolio = ({
    nameProject, infoProject, description, technology, urlProject, imgMockup
}) => {
    return (
        <StyledDivMainContainer>
            <div className='container'>
                <div className='container-text'>
                    <h2>{nameProject}</h2>
                    <p>{infoProject}</p>

                    <h4>O que foi feito?</h4>
                    <p>{description}</p>

                    <h4>Tecnologias utilizadas:</h4>
                    <div className="container-technology">
                        {technology.map((item) => {
                            return <button disabled>{item}</button>
                        })}
                    </div>

                    <div className='url-project'>
                        <a href="#">{urlProject}</a>
                    </div>
                </div>

                <div className='container-photo'>
                    <a href='#'><img src={imgMockup} /></a>
                </div>
            </div>
        </StyledDivMainContainer>
    );
}

export default CardPortfolio;