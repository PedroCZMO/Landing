const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  const { email, message } = req.body;
  console.log("Nuevo contacto:", { email, message });
  res.status(200).json({ message: "Mensaje recibido" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
