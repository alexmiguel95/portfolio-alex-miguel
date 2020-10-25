import React from 'react';
import CardPortfolio from '../../component/card-portfolio';

/* Import imgs mockup para o component CardPortfolio*/
import imgMockup from '../../assets/imgs/mockup-project-example.png';

const Portfolio = () => {
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
        { 
            nameProject: 'NOME DO PROJETO',
            infoProject: 'Informações sobre o projeto. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            description: 'Descrição sobre o que foi feito.',
            technology: ['JavaScript', 'HTML', 'CSS'],
            urlProject: 'www.urldoprojeto.com.br',
            imgMockup: `${imgMockup}`
        },
        { 
            nameProject: 'NOME DO PROJETO',
            infoProject: 'Informações sobre o projeto. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            description: 'Descrição sobre o que foi feito.',
            technology: ['HTML', 'CSS'],
            urlProject: 'www.urldoprojeto.com.br',
            imgMockup: `${imgMockup}`
        }
    ];

    return(
        <div>
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
        </div>
    );
}

export default Portfolio;