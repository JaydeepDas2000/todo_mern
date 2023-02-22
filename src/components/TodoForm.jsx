import React, {useState} from 'react'

import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/actions';

function TodoForm() {

    const [text, setText] = useState(""); //NOSONAR

    const dispatch = useDispatch();

    const OnFromSubmit = (e) => {
        // TODO: working on it
        e.preventDefault();

        // addNewTodo(); we can directly use it but in redux we have to use dispatch
        dispatch(addNewTodo(text));
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