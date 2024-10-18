const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');  // Para permitir que el frontend acceda al backend desde otro dominio
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/save-answers', (req, res) => {
    const newAnswers = req.body;
   
    // Leer el archivo existente, si existe
    fs.readFile('answers.json', 'utf8', (err, data) => {
      let answers = [];
      if (!err && data) {
        try {
          // Si el archivo existe, parsear el JSON existente
          answers = JSON.parse(data);
          // Asegurarse de que sea un array
          if (!Array.isArray(answers)) {
            answers = []; // Reiniciar a un array vacío si no lo es
          }
        } catch (parseError) {
          console.error('Error al parsear JSON:', parseError);
          answers = []; // Reiniciar a un array vacío en caso de error de parseo
        }
      }
   
      // Agregar las nuevas respuestas a la lista existente
      answers.push(newAnswers);
   
      // Guardar las respuestas actualizadas en el archivo
      fs.writeFile('answers.json', JSON.stringify(answers, null, 2), (err) => {
        if (err) {
          return res.status(500).json({ error: 'Error al guardar respuestas' });
        }
        res.status(200).json({ message: 'Respuestas guardadas correctamente' });
      });
    });
});

  

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
