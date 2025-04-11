const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

// Ruta de prueba
app.get('/api/prueba', async (req, res) => {
  try {
    const client = await pool.connect();
    res.send('✅ Conexión exitosa con Supabase!');
    client.release();
  } catch (err) {
    console.error('❌ Error al conectar con la base de datos:', err.message);
    res.status(500).send('Error en la conexión con Supabase');
  }
});
