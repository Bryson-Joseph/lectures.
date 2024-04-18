export function App() {
  const [minutes, setMinutes] = React.useState('')
  const onChange = () => {
    console.log('somebody wrote')
  }
  return (
    <div>
      <h1 className="hi"> Super Converter </h1>{' '}
      <label htmlFor="minutes"> Minutes </label>{' '}
      <input
        value={minutes}
        id="minutes"
        placeholder="Minutes"
        type="number"
        onChange={onChange}
      />{' '}
      <label htmlFor="hours"> Hours </label>{' '}
      <input id="hours" placeholder="Hours" type="number" />
    </div>
  )
}
