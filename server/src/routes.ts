import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);


export default routes;

//GET:    Buscar ou listar uma informação
//POST:   Criar alguma nova informação
//PUT:    Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params:         Identificar qual recurso quero atualizar ou deletar
//Query Params:         Paginação, filtros, ordenação 