import { IToDO } from '../atoms'

function ToDo({ text }: IToDO) {
  return (
    <li>
      <span>{text}</span>
      <button>Doing</button>
      <button>To Do</button>
      <button>Done</button>
    </li>
  )
}

export default ToDo
