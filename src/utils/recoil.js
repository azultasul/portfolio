import { atom, selector } from 'recoil'

const atomOrder = atom({
  key: 'at-order',
  default: 0,
})
const atomTech = atom({
  key: 'at-tech',
  default: [],
})
const atomType = atom({
  key: 'at-type',
  default: [],
})

const projectData = selector({
  key: 'sel-projects',
  get: async () => {
    const response = await fetch('/api/projects', { method: 'GET' }).then((res) => res.json())
    return response
  },
})

export { atomOrder, atomTech, atomType, projectData }
