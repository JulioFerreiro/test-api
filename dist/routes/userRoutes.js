"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllers = require('../controllers/UserControllers'); var _UserControllers2 = _interopRequireDefault(_UserControllers);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

//Não deveria existir
// router.get('/', userController.index); // Lista usuário
//router.get('/:id', userController.show); // Lista Usuário

router.post('/', _loginRequired2.default, _UserControllers2.default.store);
router.put('/', _loginRequired2.default, _UserControllers2.default.update);
router.delete('/', _loginRequired2.default, _UserControllers2.default.delete);

exports. default = router;

/*
index -> lista todos os usuarios ->  GET
store/create -> cria um novo usuário - POST
delete -> apaga um usuário-> DELETE
show -> mostra um usuário => GET
update -> ataliza um usuário -> PATCH ou PUT

*/
