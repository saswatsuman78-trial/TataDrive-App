import {
  View,
  Pressable,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import {
  colors,
  radius,
  spacing,
} from '@/theme';

export default function FloatingTabBar({
  state,
  descriptors,
  navigation,
}: any) {
  return (
    <View
      style={{
        position: 'absolute',

        left: 20,
        right: 20,
        bottom: 24,

        flexDirection: 'row',

        justifyContent: 'space-around',

        alignItems: 'center',

        paddingVertical: spacing.md,

        borderRadius: radius.xl,

        backgroundColor:
          'rgba(20,22,30,0.82)',

        borderWidth: 1,

        borderColor:
          colors.glassBorder,
      }}
    >
      {state.routes.map(
        (
          route: any,
          index: number
        ) => {
          const isFocused =
            state.index === index;

          let iconName: any;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (
            route.name === 'MyCar'
          ) {
            iconName = 'car-sport';
          } else if (
            route.name === 'Services'
          ) {
            iconName = 'build';
          } else if (
            route.name === 'Explore'
          ) {
            iconName = 'compass';
          } else {
            iconName = 'person';
          }

          return (
            <Pressable
              key={route.key}
              onPress={() =>
                navigation.navigate(
                  route.name
                )
              }
            >
              <View
                style={{
                  width: 52,
                  height: 52,

                  justifyContent:
                    'center',

                  alignItems: 'center',

                  borderRadius:
                    radius.full,

                  backgroundColor:
                    isFocused
                      ? 'rgba(255,255,255,0.08)'
                      : 'transparent',
                }}
              >
                <Ionicons
                  name={iconName}
                  size={24}
                  color={
                    isFocused
                      ? colors.accentBlue
                      : colors.textMuted
                  }
                />
              </View>
            </Pressable>
          );
        }
      )}
    </View>
  );
}