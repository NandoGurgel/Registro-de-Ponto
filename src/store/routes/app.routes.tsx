import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HistoryPonto from '../../pages/HistoryPonto'
import Ponto from '../../pages/Ponto'
import RegisterCell from '../../pages/RegisterCell'
import StatusPonto from '../../pages/StatusPonto'

import routesConstants from '../../utils/routesConstants'

const Stack = createStackNavigator()

const AppRoutes: React.FC = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={routesConstants.PONTO}>
        <Stack.Screen name={routesConstants.PONTO} component={Ponto} />
        <Stack.Screen name={routesConstants.HISTORY_PONTO} component={HistoryPonto} />
        <Stack.Screen name={routesConstants.REGISTER_CELL} component={RegisterCell} />
        <Stack.Screen name={routesConstants.STATUS_PONTO} component={StatusPonto} />
      </Stack.Navigator>
    );
  };
  
  export default AppRoutes;