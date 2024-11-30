import Styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = Styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin:0;
    paddin:0;
`;
export const Scrow = Styled.ScrollView`
  margin-top: 50px;
`;
export const CurrentTime = Styled.Text`
margin-top: 10px;
margin-bottom: 40px;
font-size: 35px
font-weight: 900;
color: #FFF;
padding: 3px;
`;
export const ButtonPonto = Styled.TouchableOpacity`
  display: flex;
  justify-content:center;
  align-items: center
  background-color: #014594;
  border-radius: 7px;
  width: 200px;
  height: 47px;
  margin-bottom: 30px;
`;
export const ButtonHistoric = Styled.TouchableOpacity`
  display: flex;
  justify-content:center;
  align-items: center
  background-color: #DEDEDE;
  border-radius: 7px;
  width: 200px;
  height: 47px;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const TextButtonPonto = Styled.Text`
  color: #DEDEDE;
  font-size: 18px;
  font-weight: 400;
`;
export const TextButtonHistoric = Styled.Text`
  color: #060606;
  font-size: 18px;
  font-weight: 400;
`;
export const ContainerBackground = Styled(LinearGradient).attrs({
  colors: ['#a3d3d3', '#a3d3d3'],
  start: {x: 0.8, y: 2},
  end: {x: 1, y: 0},
})`
  display: flex;
  width: 100%;
  flex:1;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;
export const ImgSmartPonto = Styled.Image`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  width: 190px;
  margin-top: 0%;
  margin-bottom:8%;
`;

export const Texto = Styled.Text`
  color: #FFF;
  font-size: 15px;
  text-align: center
`;
