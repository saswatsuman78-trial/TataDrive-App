import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '@/theme';

import HomeScreen from '@/screens/Home/HomeScreen';
import MyCarScreen from '@/screens/MyCar/MyCarScreen';
import ServicesScreen from '@/screens/Services/ServicesScreen';
import ExploreScreen from '@/screens/Explore/ExploreScreen';
import ProfileScreen from '@/screens/Profile/ProfileScreen';
import RenderingTestScreen from '@/screens/Test/RenderingTestScreen';
import FloatingTabBar from '@/components/navigation/FloatingTabBar';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        sceneStyle: {
        backgroundColor: colors.bgPrimary,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'MyCar') {
            iconName = 'car-sport';
          } else if (route.name === 'Services') {
            iconName = 'build';
          } else if (route.name === 'Explore') {
            iconName = 'compass';
          } else {
            iconName = 'person';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBar={(props) => <FloatingTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="MyCar" component={MyCarScreen} />

      <Tab.Screen
        name="Services"
        component={ServicesScreen}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
      />

      <Tab.Screen
        name="Test"
        component={RenderingTestScreen}
      />

      {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      /> */}
    </Tab.Navigator>
  );
}