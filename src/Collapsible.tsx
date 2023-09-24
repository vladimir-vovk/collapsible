import { ReactElement, useState } from 'react'
import { LayoutChangeEvent, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

import { Card } from './Card'
import { Row } from './Row'
import { Switch } from './Switch'

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 17
  },
  children: {
    overflow: 'hidden'
  },
  contentWrapper: {
    position: 'absolute',
    left: 0,
    right: 0
  }
})

type Props = {
  children: ReactElement | ReactElement[] | null
  title: string
}

export const Collapsible = ({ children, title }: Props): ReactElement => {
  const [height, setHeight] = useState(0)
  const [isCollapsed, setCollapsed] = useState(false)

  const aStyle = useAnimatedStyle(() => ({
    height: isCollapsed ? withTiming(0) : withTiming(height)
  }))

  const onSwitch = () => {
    setCollapsed((collapsed) => !collapsed)
  }

  const onLayout = (event: LayoutChangeEvent) => {
    const layoutHeight = event?.nativeEvent?.layout.height
    if (layoutHeight) {
      setHeight(layoutHeight)
    }
  }

  return (
    <Card>
      <>
        <Row>
          <Text style={styles.title}>{title}</Text>
          <Switch value={isCollapsed} onChange={onSwitch} />
        </Row>
        <Animated.View style={[styles.children, aStyle]}>
          <View onLayout={onLayout} style={styles.contentWrapper}>
            {children}
          </View>
        </Animated.View>
      </>
    </Card>
  )
}
