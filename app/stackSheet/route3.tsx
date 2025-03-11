import { StyleSheet, View } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export default function RouteThreeScreen() {
  return (
    <View style={styles.container}>
      <ThemedView>
        <ThemedText type="title">Route 3</ThemedText>
        <ThemedText>This is the last route</ThemedText>
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
