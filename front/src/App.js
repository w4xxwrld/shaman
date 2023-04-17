import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api') 
      .then(response => setData(response.data))
      .catch(error => console.error('Ошибка получения данных:', error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <p>{data.age}</p>
          <p>{data.city}</p>
        </div>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default MyComponent;
