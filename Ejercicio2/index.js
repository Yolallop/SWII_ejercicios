const express = require("express");
const Ajv = require("ajv");
const ajv = new Ajv();
const peliculasSchema = require("./schemas/peliculas.schema.json");
const actoresSchema = require("./schemas/actores.schema.json");

const app = express();
app.use(express.json()); 

function validateJSON(schema, data) {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    return { valid, errors: validate.errors };
}


app.post("/validate/peliculas", (req, res) => {
    const result = validateJSON(peliculasSchema, req.body);
    if (result.valid) {
        res.status(200).json({ message: " JSON de película válido" });
    } else {
        res.status(400).json({ error: " JSON de película inválido", details: result.errors });
    }
});

app.post("/validate/actores", (req, res) => {
    const result = validateJSON(actoresSchema, req.body);
    if (result.valid) {
        res.status(200).json({ message: "JSON válid" });
    } else {
        res.status(400).json({ error: "JSON inválido", details: result.errors });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
