import React, { useCallback } from "react"
import { Slot, router } from "expo-router"
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet"
import { StyleSheet } from "react-native"

const Approach2Layout = () => {
  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} opacity={0.35} />
  }, [])

  return (
    <BottomSheet backdropComponent={renderBackdrop} onClose={router.back}>
      <BottomSheetView style={styles.container}>
        <Slot />
      </BottomSheetView>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
})

export default Approach2Layout
