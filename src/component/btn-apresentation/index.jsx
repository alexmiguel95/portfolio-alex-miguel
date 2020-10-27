import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../../hooks';
import { HashLink as Link } from 'react-router-hash-link';

const BtnApresentation = () => {
    const [width] = useWindowSize();

    if(width > 992) {
        return(
            <StyledDivContainerBtnPresentation>
                <Link smooth to="#portfolio" className="btn-highlight">MEUS TRABALHOS</Link>
                <Link smooth to="#resume">ME CONHEÇA</Link>
            </StyledDivContainerBtnPresentation>
        )
    }else {
        return(
            <StyledDivContainerBtnPresentation>
                <Link smooth to="#portfolio" className="btn-highlight">PORTFOLIO</Link>
                <Link smooth to="#resume">RESUMO</Link>
            </StyledDivContainerBtnPresentation>
        )
    }
}

export default BtnApresentation;


const StyledDivContainerBtnPresentation = styled.div`
    text-align: center;

    @media(max-width: 992px){
         margin-bottom: 40px;
    }

    a{
        background-color: white;
        color: black;
        border: 2px solid black;
        border-radius: 20px;
        font-weight: bold;
        letter-spacing: 2px;
        width: 200px;
        height: 40px;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 35px;

        @media(max-width: 992px){
            font-size: 13px;
            width: 130px;
            height: 35px;
            line-height: 30px;
        }
    }

        .btn-highlight{
            background-color: var(--highlight-color);
            color: white;
            border: 2px solid var(--highlight-color);
            margin-right: 15px;
        }
`;