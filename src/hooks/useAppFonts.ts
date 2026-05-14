import { useFonts } from 'expo-font';

export function useAppFonts() {
  return useFonts({
    'Outfit-ExtraBold': require('@/assets/fonts/Outfit-ExtraBold.ttf'),

    'Outfit-Bold': require('@/assets/fonts/Outfit-Bold.ttf'),

    'BarlowCondensed-Bold': require('@/assets/fonts/BarlowCondensed-Bold.ttf'),

    'PlusJakartaSans-Medium': require('@/assets/fonts/PlusJakartaSans-Medium.ttf'),

    'PlusJakartaSans-Regular': require('@/assets/fonts/PlusJakartaSans-Regular.ttf'),

    'PlusJakartaSans-SemiBold': require('@/assets/fonts/PlusJakartaSans-SemiBold.ttf'),
  });
}