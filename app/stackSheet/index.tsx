import { StyleSheet, View } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Link } from "expo-router"

export default function StackSheetScreen() {
  return (
    <View style={styles.container}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Single Bottom Sheet with Nested Routes</ThemedText>
        <ThemedText>One bottom sheet containing nested Expo Router routes</ThemedText>
      </ThemedView>
      <Link href="/stackSheet/route1">
        <ThemedText type="link">Route 1</ThemedText>
      </Link>
      <Link href="/stackSheet/route2">
        <ThemedText type="link">Route 2</ThemedText>
      </Link>
      <Link href="/stackSheet/route3">
        <ThemedText type="link">Route 3</ThemedText>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    gap: 5,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
})
