
const InputFreid = ({text, handleInput, handleSubmit}) => {
  return (
    <label>
    <input value={text} onChange={(event) => handleInput(event.target.value)} />
    <button onClick={handleSubmit}>Add Todo</button>
  </label>
  )
}

export default InputFreid