import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informaÇões do back-end
// POST: Criar nova informação no back-end
// PUT: Atualizar uma informação do back-end
// DELETE: Remover uma informação do back-end

// Request Param: Paramatros que vem na própria rota que identificam um recurso.
// Query Param: Paranetros que vem na própria rota, geralmente opcionais, para filtro, paginação e etc.
// Request Body: Parametros para criação/atualização de informações.

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);
