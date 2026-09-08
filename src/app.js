const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ status: "API rodando com sucesso!" });
});

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
}

module.exports = app;
