import React, { useState } from 'react';
import './Form.scss'

function Form(props) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => { 
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
    })
};

  return (
    <form className='todo' onSubmit={handleSubmit}>
      <input type="text" name='text' placeholder='Add an item...' className='input' value={input} onChange={handleChange} />
      <button className='button'>Add</button>
    </form>
  )
}

export default Form
