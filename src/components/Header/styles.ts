import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const ContainerBackground = styled(LinearGradient).attrs({
  colors: ['#fff', '#fff'],
  start: {x: 0.8, y: 2},
  end: {x: 1, y: 0},
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`;

export const ContainerLogo = styled.View`
  align-items: center;
  padding: 25px;
  margin-bottom: 20px;
`;

export const YellowLine = styled.View`
  background-color: #a3d3d3;
  height: 15px;
  width: 100%;
`;

export const ImageGov = styled.Image`
  height: 50px;
  width: 300px;
`;

export const Ondinha = styled.Image`
  width: 100%;
  max-height: 85px;
  position: absolute;
  top: auto;
  bottom: 0px;
  right: auto;
  left: auto;
`;
