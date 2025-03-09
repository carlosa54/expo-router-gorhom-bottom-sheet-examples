import { StyleSheet, View } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Link } from "expo-router"

export default function RouteOneScreen() {
  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="title">Route 1</ThemedText>
      </ThemedView>
      <ThemedText>This is the first route</ThemedText>
      <ThemedView>
        <Link href="/stackSheet/route2">
          <ThemedText type="link">Go to Route 2</ThemedText>
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
