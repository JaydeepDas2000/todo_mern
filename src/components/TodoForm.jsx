import React, {useState} from 'react'

function TodoForm() {

    const [text, setText] = useState(""); //NOSONAR


    const OnFromSubmit = () => {
        // TODO: working on it
    }
    const onInputChange = (e) => {
        setText(e.target.value);
    }

  return (
    <header>
        <form className='form' onSubmit={OnFromSubmit}>
            <input type="text" className="form-control input-todo" placeholder='Todo Note eg. Make Dinner' onChange={onInputChange}/>
        </form>
    </header>
  )
}

export default TodoForm