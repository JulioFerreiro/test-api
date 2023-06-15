import { Router } from 'express';
import userController from '../controllers/UserControllers';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//Não deveria existir
// router.get('/', userController.index); // Lista usuário
//router.get('/:id', userController.show); // Lista Usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuarios ->  GET
store/create -> cria um novo usuário - POST
delete -> apaga um usuário-> DELETE
show -> mostra um usuário => GET
update -> ataliza um usuário -> PATCH ou PUT

*/
