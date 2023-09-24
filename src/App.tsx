import { ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { NutritionalInfo } from './NutritionalInfo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 22
  }
})

export default function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NutritionalInfo />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
