import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import routesConstants from '../../utils/routesConstants';

import LogoLb from '../../assets/logo-lb.png';

import {
  BackBtn,
  Container,
  ContainerLogo,
  ContainerLogoBtn,
  ImageLBStudio,
  Page,
  YellowLine,
} from './styles';

const HeaderWithBackButton: React.FC = () => {
  const navigate = useNavigation();

  const ponto = () => {
    navigate.navigate(routesConstants.PONTO);
  };

  return (
    <Page>
      <Container>
        <YellowLine />
        <ContainerLogoBtn>
          <BackBtn onPress={ponto}>
            <Icon name="chevron-left" size={42} color="#fafafa" />
          </BackBtn>
          <ContainerLogo testID="header">
            <ImageLBStudio source={LogoLb} />
          </ContainerLogo>
        </ContainerLogoBtn>
      </Container>
    </Page>
  );
};

export default HeaderWithBackButton;
