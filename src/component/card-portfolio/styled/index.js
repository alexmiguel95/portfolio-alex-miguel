import styled from 'styled-components';

const StyledDivMainContainer = styled.div`
    --highlight-color: #4A38FF;

    width: 100%;
    background-color: white;
    border-bottom: 2px solid #e2e2e2;

    .container{
        margin: 0 15px 0 15px;
        padding: 25px 0 25px 0;
        display: flex;

        .container-text{
            font-size: 17px;

            h2{
                font-weight: bold;
                margin-bottom: 8px;
            }

            h4{
                font-weight: bold;
                margin-bottom: 0;
            }

            p{
                color: #acaaaa;
                line-height: 1.3;
                margin-bottom: 10px;
            }

            .container-technology{
                button{
                    border: 0.5px solid #999999;
                    border-radius: 6px;
                    padding: 4px 10px 4px 10px;
                    box-shadow: 0px 3px 6px 0px rgba(50, 50, 50, 0.73);
                    margin-right: 10px;
                }
            }

            .url-project{
                margin-top: 20px;

                a{
                    color: var(--highlight-color);
                }
            }
        }

        .container-photo{
            width: 500px;
            margin: auto 0;

            @media(max-width: 992px){
                display: none;
            }

            img{
                width: 100%;
            }
        }
    }
`;

export default StyledDivMainContainer;