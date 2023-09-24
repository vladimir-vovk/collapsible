import { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    paddingVertical: 12,
    borderRadius: 8,
    width: 68,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 13,
    fontWeight: '500'
  }
})

type Props = {
  children: string
}

export const Badge = ({ children }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}
