import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  margin: 0;
  padding: 0;
`;
export const Scrow = styled.ScrollView`
  margin-top: 50px;
`;
export const ButtonRegisterCell = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #014594;
  border-radius: 7px;
  width: 200px;
  height: 47px;
  margin-bottom: 15px;
`;
export const TextButton = styled.Text`
  color: #dedede;
  font-size: 18px;
  font-weight: 400;
`;
export const ContainerBackground = styled(LinearGradient).attrs({
  colors: ['#333', '#333'],
  start: {x: 0.8, y: 2},
  end: {x: 1, y: 0},
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;
export const ImgSmartPonto = styled.Image`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
  width: 190px;
  margin-top: 0%;
  margin-bottom: 8%;
`;
export const Input = styled.TextInput`
  color: #fff;
  width: 250px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 7px;
  margin-bottom: 20px;
`;
export const Texto = styled.Text`
  color: #fff;
  font-size: 15px;
  text-align: center;
`;
export const KeyboardArea = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  justify-content: center;
`;
