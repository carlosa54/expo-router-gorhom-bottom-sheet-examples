import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet"
import { Stack, useRouter } from "expo-router"
import React, { useCallback, useMemo } from "react"
import { StyleSheet } from "react-native"

const Approach1Layout = () => {
  const router = useRouter()
  const snapPoints = useMemo(() => ["50%", "80%"], [])

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} opacity={0.35} />
  }, [])

  return (
    <BottomSheet
      enableDynamicSizing={false}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      onClose={() => router.dismissTo("/")}
    >
      <BottomSheetView style={styles.container}>
        <Stack
          initialRouteName="index"
          screenOptions={{ contentStyle: { flex: 1, backgroundColor: "white" } }}
        >
          <Stack.Screen name="index" options={{ headerShown: false, headerTitle: "Approach 1" }} />
          <Stack.Screen name="route1" options={{ headerTitle: "Route 1" }} />
          <Stack.Screen name="route2" options={{ headerTitle: "Route 2" }} />
          <Stack.Screen name="route3" options={{ headerTitle: "Route 2" }} />
        </Stack>
      </BottomSheetView>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Approach1Layout
