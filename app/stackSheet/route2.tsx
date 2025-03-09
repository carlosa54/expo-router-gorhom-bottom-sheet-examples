import { StyleSheet, View } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Link } from "expo-router"

export default function RouteTwoScreen() {
  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="title">Route 2</ThemedText>
        <ThemedText>This is the second route</ThemedText>
      </ThemedView>
      <ThemedView>
        <Link href="/stackSheet/route3">
          <ThemedText type="link">Go to Route 3</ThemedText>
        </Link>
      </ThemedView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 24,
    gap: 5,
  },
})
