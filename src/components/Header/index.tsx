import React from 'react';

import LogoLb from '../../assets/logo-lb.png';

import {
  Container,
  ImageGov,
  ContainerLogo,
  ContainerBackground,
  YellowLine,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ContainerBackground>
        <YellowLine />
        <ContainerLogo testID="header">
          <ImageGov source={LogoLb} />
        </ContainerLogo>
      </ContainerBackground>
    </Container>
  );
};

export default Header;
