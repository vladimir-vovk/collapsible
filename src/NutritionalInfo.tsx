import { ReactElement } from 'react'

import { Collapsible } from './Collapsible'
import { Info } from './Info'

const info = [
  {
    title: 'Energy',
    value: '183 kcal'
  },
  {
    title: 'Fat',
    value: '15.03 g'
  },
  {
    title: 'Carbohydrates',
    value: '5.46 g'
  },
  {
    title: 'Protein',
    value: '5.64 g'
  },
  {
    title: 'Salt',
    value: '0.08 g'
  },
  {
    title: 'Fibre',
    value: '1.65 g'
  }
]

export const NutritionalInfo = (): ReactElement => {
  return (
    <Collapsible title="Nutritional Information">
      {info.map(({ title, value }) => (
        <Info {...{ title, value }} key={title} />
      ))}
    </Collapsible>
  )
}
