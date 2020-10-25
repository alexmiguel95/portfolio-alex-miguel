import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../../hooks'

const BtnApresentation = () => {
    const [width] = useWindowSize();

    if(width > 992) {
        return(
            <StyledDivContainerBtnPresentation>
                <button className="btn-highlight">MEUS TRABALHOS</button>
                <button>ME CONHEÇA</button>
            </StyledDivContainerBtnPresentation>
        )
    }else {
        return(
            <StyledDivContainerBtnPresentation>
                <button className="btn-highlight">PORTFOLIO</button>
                <button>RESUMO</button>
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

    button{
        background-color: white;
        color: black;
        border: 2px solid black;
        border-radius: 20px;
        font-weight: bold;
        letter-spacing: 2px;
        width: 200px;
        height: 40px;
        cursor: pointer;

        @media(max-width: 992px){
            font-size: 13px;
            width: 130px;
            height: 35px;
        }
    }

        .btn-highlight{
            background-color: var(--highlight-color);
            color: white;
            border: 2px solid var(--highlight-color);
            margin-right: 15px;
        }
`;