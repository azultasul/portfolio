import { atom } from 'recoil'

const atomOrder = atom({
  key: 'at-order',
  default: ['0'],
})
const atomTech = atom({
  key: 'at-tech',
  default: [],
})
const atomType = atom({
  key: 'at-type',
  default: [],
})

export { atomOrder, atomTech, atomType }
