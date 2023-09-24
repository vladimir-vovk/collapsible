import { ReactElement } from 'react'
import { StyleSheet, Text } from 'react-native'

import { Badge } from './Badge'
import { Row } from './Row'

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 13,
    paddingLeft: 8
  }
})

type Props = {
  title: string
  value: string
}

export const Info = ({ title, value }: Props): ReactElement => {
  return (
    <Row>
      <Text style={styles.title}>{title}</Text>
      <Badge>{value}</Badge>
    </Row>
  )
}
