import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ToastsView} from "./views/Toasts.view";
import {TestView} from "./views/Test.view";

const Tab = createBottomTabNavigator();

const App: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Toasts" component={ToastsView} />
      <Tab.Screen name="Testing" component={TestView} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default App;

