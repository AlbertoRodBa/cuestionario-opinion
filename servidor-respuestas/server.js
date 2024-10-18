const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');  // Para permitir que el frontend acceda al backend desde otro dominio
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para guardar las respuestas
app.post('/save-answers', (req, res) => {
  const answers = req.body;

  // Guardar las respuestas en un archivo JSON
  fs.writeFile('answers.json', JSON.stringify(answers, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error al guardar respuestas' });
    }
    res.status(200).json({ message: 'Respuestas guardadas correctamente' });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
