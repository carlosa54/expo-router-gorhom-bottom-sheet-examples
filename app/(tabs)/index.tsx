import { Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText>
        This is an example project on how to integrate <ThemedText type="defaultSemiBold">gorhom/react-native-bottom-sheet</ThemedText> with <ThemedText type="defaultSemiBold">expo-router</ThemedText> 
      </ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Approach #1: Single Bottom Sheet with Nested Routes</ThemedText>
        <ThemedText>
          One bottom sheet containing nested Expo Router routes
        </ThemedText>
        <ThemedView style={styles.bottomSheetLinkContainer}>
          <Link href="/stackSheet">
            <ThemedText type="link">Open bottom sheet with Stack</ThemedText>
          </Link>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Approach #2: Bottom Sheet Routes</ThemedText>
        <ThemedText>
        Each route triggers its own individual bottom sheet
        </ThemedText>
        <ThemedView style={styles.bottomSheetLinkContainer}>
          <Link href="/bottomSheet/route1">
            <ThemedText type="link">Open bottom sheet Route 1</ThemedText>
          </Link>
          <Link href="/bottomSheet/route2">
            <ThemedText type="link">Open bottom sheet Route 2</ThemedText>
          </Link>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  bottomSheetLinkContainer: {
    gap: 5,
    alignItems: "center",
  },
});
