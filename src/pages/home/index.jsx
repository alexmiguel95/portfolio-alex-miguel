import React from 'react';
import styled from 'styled-components';
import Header from '../../component/header';
import MyPhoto from '../../component/my-photo';
import InfoContact from '../../component/info-contact';
import Presentation from '../../component/presentation';
import FormContact from '../../component/form-contact';
import CardPortfolio from '../../component/card-portfolio';


/* Import imgs mockup para o component CardPortfolio*/
import imgMockup from '../../assets/imgs/mockup-project-example.png';

const Home = () => {

    /* Lista de projetos portfolio */
    const listProjects = [
        { 
            nameProject: 'NOME DO PROJETO',
            infoProject: 'Informações sobre o projeto. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            description: 'Descrição sobre o que foi feito.',
            technology: ['React', 'JavaScript', 'HTML', 'CSS'],
            urlProject: 'www.urldoprojeto.com.br',
            imgMockup: `${imgMockup}`
        },
    ];

    return(
        <StyledDivMain>
            <Header />

            <ContainerMain>
                <div className='container-main-info-contact'>
                    <InfoContact />
                </div>

                <div className='container-main-my-photo'>
                    <MyPhoto />
                </div>

                <div className='container-main-presentation'>
                    <Presentation />
                </div>
            </ContainerMain>

            <FormContact />

            {/* Portfolio */}
            {
                listProjects.map((item) => {
                    return(
                        <CardPortfolio 
                            nameProject={item.nameProject}
                            infoProject={item.infoProject}
                            description={item.description}
                            technology={item.technology}
                            urlProject={item.urlProject}
                            imgMockup={item.imgMockup}  
                        />
                    ); 
                })
            }
        </StyledDivMain>
    );
}

export default Home;


/* Styled Components */
const StyledDivMain = styled.div`
    background-color: white;
`;

const ContainerMain = styled.div`
    --highlight-color: #4A38FF;

    display: flex;

    @media(max-width: 992px){
        flex-direction: column;	
    }

    .container-main-info-contact{
        height: calc(100vh - 126px);
        width: 400px;
        min-width: 400px;
        background-color: var(--highlight-color);
        display: flex;	

        @media(max-width: 992px){
            display: none;
        }
    }

    .container-main-my-photo{
        margin: -126px 0 0 -101px;
        align-self: center; 

          /* Mobile */
        @media(max-width: 992px){
            height: 200px;
            margin: 0 auto;
            margin-top: 40px;
        }
    }

    .container-main-presentation{
        align-self: center;
        margin-right: 25px;
        margin: -126px 25px 0 10%;

        @media(max-width: 992px){
            margin: 0 auto;
            margin-top: 60px;
            width: 300px;
        }
    }
`;
