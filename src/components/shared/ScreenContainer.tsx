import {
  ReactNode,
} from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import {
  LinearGradient,
} from 'expo-linear-gradient';

import DashboardBackground from './DashboardBackground';

type Props = {
  children: ReactNode;
};

export default function ScreenContainer({
  children,
}: Props) {
  return (
    <LinearGradient
      colors={[
        '#050816',
        '#04070F',
        '#02040A',
      ]}
      style={{
        flex: 1,
      }}
    >
      <DashboardBackground />

      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={
            false
          }
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}