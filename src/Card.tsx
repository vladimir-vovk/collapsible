import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6
  }
})

type Props = {
  children: ReactElement | (ReactElement | null)[] | null
}

export const Card = ({ children }: Props): ReactElement => {
  return <View style={styles.container}>{children}</View>
}
