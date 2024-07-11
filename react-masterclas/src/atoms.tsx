import { atom } from 'recoil'

interface IToDoState {
  [key: string]: string[]
}

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    TO_DO: ['a', 'b'],
    Doing: ['c', 'd', 'e'],
    Done: ['f'],
    'Do Later': ['x', 'Z'],
  },
})
