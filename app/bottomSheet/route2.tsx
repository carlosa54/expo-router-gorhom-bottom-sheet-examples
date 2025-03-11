import { StyleSheet, View } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export default function RouteTwoScreen() {
  return (
    <ThemedView style={styles.container}>
        <ThemedText type="title">Route 2</ThemedText>
        <ThemedText>This is the second route with different height</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    gap: 5,
    height: 200,
  },
})
