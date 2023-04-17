const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api', (req, res) => {
  const data = {
    name: 'John',
    age: '30',
    city: 'New York'
  };

  res.json(data);
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});