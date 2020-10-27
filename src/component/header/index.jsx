import React from 'react';
import { StyledHeader, StyledMenuAntd} from './styled';
import ResponsiveAntMenu from 'responsive-ant-menu'
import { Menu } from 'antd';
import 'antd/lib/menu/style/css';
import 'antd/lib/popover/style/css';
import { MdMenu, MdClose} from 'react-icons/md';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return(
        <StyledHeader>
            <div className='background-header'>
                <figure>
                    <a href="#">
                        <img src={require('../../assets/imgs/logo-alexmiguel-branco-fnd-transparente.png')} alt='Logo Alex Miguel' className='logo' />
                    </a>
                </figure>
            </div>

            <ResponsiveAntMenu
                mobileMenuContent=
                {
                    isMenuShown => isMenuShown ?
                        <MdClose className='menu-hamburguer' /> :
                        <MdMenu className='menu-hamburguer'/>
                }
                mobileBreakPoint={993}
                throttleViewportChange={0}
                mode={isMenuShown => isMenuShown ? 'vertical' : 'horizontal'}
                placement="topLeft"
            >
                {() =>
                    <StyledMenuAntd>
                        <Menu.Item key='/#portfolio' className={'menu'}>
                            <Link smooth to="#portfolio">PORTFOLIO</Link>
                        </Menu.Item>
                        <Menu.Item key='/#resumo' className={'menu'}>
                            <Link smooth to="#resume">SOBRE MIM</Link>
                        </Menu.Item>
                        <Menu.Item key='/#contato' className={'menu'}>
                            <Link smooth to="#contact">CONTATO</Link>
                        </Menu.Item>
                    </StyledMenuAntd>
                }
            </ResponsiveAntMenu>
        </StyledHeader>
    );
}

export default Header;

