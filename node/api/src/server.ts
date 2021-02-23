import express, { request, response } from 'express';

const app = express();

/* 
GET => Busca
POST => Salvar
PUT => Alterar
DELETE => Deletar
PATCH => Alteração específica
*/


app.get("/", (request, response) => {
    return response.json({message: "Hello World - NLW 04"}); 
});

// 1 param => Rota(Recurso API)
// 2 param => request, response

app.post("/", (request, response) => {
    return response.json({message: "Seus dados foram salvos com sucesso!"});
});

app.listen(3333, () => console.log("Server is running!"));