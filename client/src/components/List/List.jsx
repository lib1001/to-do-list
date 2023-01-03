import React, {useState} from 'react';
import Form from '../Form/Form';

function List() {
    const [list, setList] = useState([]);
  return (
    <div>
        <h1>What's on the List?</h1>
        <Form />
    </div>
  )
}

export default List