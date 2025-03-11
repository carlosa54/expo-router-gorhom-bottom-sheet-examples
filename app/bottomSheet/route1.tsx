import { StyleSheet, View } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export default function RouteOneScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Route 1</ThemedText>
      <ThemedText>This is the first route</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    gap: 5,
    height: 100,
  },
})
