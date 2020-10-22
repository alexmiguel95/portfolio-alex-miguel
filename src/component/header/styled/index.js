import styled from 'styled-components';
import { Menu } from 'antd';

export const StyledHeader = styled.header`
    --color-btn: #999999;
    --color-btn-hover: black;
    --highlight-color: #4A38FF;

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;	
    align-items: center;	
    width: 100%;
    background-color: white;

    @media (max-width: 992px){ 
        background-color: var(--highlight-color);
    } 

    .background-header{
        background-color: var(--highlight-color);
        width: 400px;
      
        figure{
            margin: 0;

            .logo{
                height: 76px;
                width: 76px;
                margin: 25px 0 25px 25px;
            }
        }
    }

    .menu-hamburguer{
        color: white;
        font-size: 70px;
        margin-right: 25px;
    }
`;

export const StyledMenuAntd = styled(Menu)`
    --highlight-color: #4A38FF;

    border: none;

    .menu{
        margin: 0 25px 0 25px !important;

        &:hover{
            border-bottom: 2px solid var(--highlight-color) !important;
        }

        a{
            font-size: 14px;
            letter-spacing: 3px;
            font-weight: bold;
            color: #999999;
        }

        a:hover {
            color: var(--highlight-color);
        }
    }
`;