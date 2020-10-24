import React from 'react';
import styled from 'styled-components';
import BtnApresentation from '../btn-apresentation';

const Presentation = () => {
    return(
        <StyledDivCotainerMain>
            <div className="container-text">
                <h1>ALEX MIGUEL</h1>
                <h3>Desenvolvedor Full Stack</h3>

                <p>
                    Olá! Sou o Alex, tenho 25 anos, moro em Curitiba e sou estudante de programação web.
                    Seja bem-vindo ao meu site!
                </p>
            </div>

            <BtnApresentation />
        </StyledDivCotainerMain>
    );
}

export default Presentation;


const StyledDivCotainerMain = styled.div`
    --highlight-color: #4A38FF;

    min-width: 417px;

    @media(max-width: 992px){
        min-width: 300px;
    }

    .container-text{
        @media(max-width: 992px){
            padding-left: 10px;
        }

        h1, h3 {
            font-weight: bold;
        }

            h1{
                color: var(--highlight-color);
                letter-spacing: 4px;
                margin-bottom: 0;
                line-height: 1;

                @media(max-width: 992px){
                    font-size: 18px;
                    letter-spacing: 3px;
                }
            }

            h3{
                @media(max-width: 992px){
                    font-size: 13px;
                }
            }

        p{
            font-size: 18px;
            line-height: 1.3;
            font-weight: 500;
            margin: 25px 0 40px 0; 

            @media(max-width: 992px){
                font-size: 14px;
                margin: 15px 0 40px 0; 
            }
        }
    }
`;

