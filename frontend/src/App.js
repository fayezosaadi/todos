import React, { useState, useEffect } from 'react';
import axios from 'axios';



const App = () => {
  const [ list, setList ] = useState([]);

  // this is equivalent to componentDidMount React lifecycle
  useEffect( () => {
    const getTodos = async () => {
      const { data } = await axios.get('http://127.0.0.1:8000/api/');
      await setList(data)
    };

    // API calls
    getTodos();
  });

  return (
    <div>
      {
        list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))
      }
    </div>
  );
};

export default App;
