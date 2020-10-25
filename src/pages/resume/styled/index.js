import styled from 'styled-components';

const StyledDivContainerMain = styled.div`
    --highlight-color: #4A38FF;

    display: flex;
    background-color: #e2e2e2;
    padding: 0 15px 0 15px;

    @media(min-width: 992px){
        height: 100vh;
    }

    .container{
        display: flex;
        margin: auto;
        flex-direction: column;
        
        @media(min-width: 992px){
            flex-direction: row-reverse;
        }

        .my-photo{
            padding: 40px 0 40px 0;
            
            figure{
                margin: 0;
                height: 150px;
                width: 150px;
                border-radius: 100%;
                margin: 0 auto;
                background-color: gray;

                @media(min-width: 992px){
                    height: 300px;
                    width: 300px;
                    margin-left: 50px;
                }

                img{
                    height: 100%;
                    border-radius: 100%;
                }
            }
        }

        .text{
            p{
                line-height: 1.3;

                @media(min-width: 992px){
                    font-size: 1rem;
                    margin-bottom: 1.8rem;
                }
            }

            .links{
                nav ul{
                    list-style-type: "\u003E";
                    margin: 0;
                    padding-bottom: 1em;

                    li{
                        color: var(--highlight-color);

                        @media(min-width: 992px){
                            font-size: 1rem;
                        }

                        a{
                            color: var(--highlight-color);
                            margin-left: 4px;
                        }
                    }
                }
            }
        }
    }
`;

export default StyledDivContainerMain;