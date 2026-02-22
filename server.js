const express = require("express");
const path = require("path");

const app = express();

// Porta do Render (obrigatório usar process.env.PORT)
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (css, js, imagens se tiver)
app.use(express.static(__dirname));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "para-voce-meu-amor.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
