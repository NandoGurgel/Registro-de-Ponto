import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export const Page = styled.View`
  flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Container = styled(LinearGradient).attrs({
  colors: ['#fff', '#fff'],
  start: {x: 0.8, y: 2},
  end: {x: 1, y: 0},
})`
  flex-direction: column;
  position: relative;
`;

export const YellowLine = styled.View`
  display: flex;
  height: 15px;
  width: 100%;
  background-color: #ffbd00;
`;

export const ContainerLogoBtn = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 10px;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100%;
`;

export const ContainerLogo = styled.View`
  /* padding: 25px 0px;
  margin-bottom: 20px; */

  align-items: center;
`;

export const BackBtn = styled(RectButton)`
  width: 40px;
  height: 40px;

  margin-right: 10px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding-right: 5px;
  border-radius: 10px;
  z-index: 4;
`;

export const ImageLBStudio = styled.Image`
  height: 50px;
  max-width: 280px;
  align-self: center;
`;

export const ImageOndas = styled.Image`
  width: 100%;
  max-height: 85px;
  position: absolute;
  top: auto;
  right: auto;
  left: auto;
  bottom: 0px;
  /* z-index:-1; */
`;
