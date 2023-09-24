import Ionicons from '@expo/vector-icons/Ionicons'

import { ReactElement, useEffect } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 2,
    paddingTop: 1
  }
})

type Props = {
  value: boolean
  onChange: () => void
}

export const Switch = ({ value, onChange }: Props): ReactElement => {
  const rotate = useSharedValue(0)

  useEffect(() => {
    rotate.value = withTiming(value ? 0 : -180)
  }, [value, rotate])

  const aStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }]
  }))

  return (
    <Pressable
      onPress={onChange}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1
        }
      ]}
    >
      <Animated.View style={[aStyle]}>
        <Ionicons name="ios-chevron-up-circle" size={32} color="salmon" style={styles.icon} />
      </Animated.View>
    </Pressable>
  )
}
