import { dummyData as data } from '../dummyData.js'
import { createProduct } from './productModel.js'
import { getVariableByName, setVariable } from './variableModel.js'
export const dbSeeding = async () => {
  const isExecute = await getVariableByName('dbSeeding')
  console.log({ dbSeeding: isExecute[0].value })

  if (isExecute[0].value == 0) {
    for (let chunk of data) {
      await createProduct(chunk)
      console.log('seeding to the database')
    }
    await setVariable('dbSeeding', true)
  }
}
