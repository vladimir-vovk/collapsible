import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8
  }
})

type Props = {
  children: ReactElement[]
}

export const Row = ({ children }: Props): ReactElement => {
  return <View style={styles.container}>{children}</View>
}
