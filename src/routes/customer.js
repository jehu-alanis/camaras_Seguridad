const router = require('express').Router();
const { isLoggedIn } = require('../lib/auth');
const customerController = require('../controllers/customerController');

router.get('/', customerController.signin);

router.get('/principal',isLoggedIn, customerController.inicio);
router.get('/signup',isLoggedIn, customerController.signup);

/*ROUTAS CAMARAS*/
router.get('/camaras',isLoggedIn, customerController.camaras);
router.get('/camaranew',isLoggedIn, customerController.camaranew);
router.post('/addcamara',isLoggedIn, customerController.savecamara);
router.get('/updatecam/:id_camara',isLoggedIn, customerController.editcamara);
router.post('/update/:id_camara',isLoggedIn, customerController.updatecamara);
router.get('/deletecam/:id_camara',isLoggedIn, customerController.deletecamara);


router.get('/provedornew',isLoggedIn, customerController.provedornew);
router.post('/addprovedor',isLoggedIn, customerController.addprovedor);
router.get('/updatepro/:id_proveedores',isLoggedIn, customerController.editprovedor);
router.post('/updatepro/:id_proveedores',isLoggedIn, customerController.updateprovedor);
router.get('/deletepro/:id_proveedores', isLoggedIn,customerController.deleteprovedor);


router.get('/tiponew',isLoggedIn, customerController.tiponew);
router.post('/addtipo',isLoggedIn, customerController.addtipo);
router.get('/updatetipo/:id_tipo',isLoggedIn, customerController.edittipo);
router.post('/updatetipo/:id_tipo',isLoggedIn, customerController.updatetipo);
router.get('/deletetipo/:id_tipo',isLoggedIn, customerController.deletetipo);

router.get('/resolucionnew',isLoggedIn, customerController.resolucionnew);
router.post('/addresolucion',isLoggedIn, customerController.addresolucion);
router.get('/updateresolucion/:id_resolucion',isLoggedIn, customerController.editresolucion);
router.post('/updateresolucion/:id_resolucion',isLoggedIn, customerController.updateresolucion);
router.get('/deleteresolucion/:id_resolucion',isLoggedIn, customerController.deleteresolucion);


router.get('/modelonew',isLoggedIn, customerController.modelonew);
router.post('/addmodelonew',isLoggedIn, customerController.addmodelonew);
router.get('/updatemodelo/:id_modelo',isLoggedIn, customerController.editmodelo);
router.post('/updatemodelo/:id_modelo',isLoggedIn, customerController.updatemodelo);
router.get('/deletemodelo/:id_modelo',isLoggedIn, customerController.deletemodelo);


router.get('/marcanew',isLoggedIn, customerController.marcanew);
router.post('/addmarcanew',isLoggedIn, customerController.addmarcanew);
router.get('/updatemarca/:id_marca',isLoggedIn, customerController.editmarca);
router.post('/updatemarca/:id_marca',isLoggedIn, customerController.updatemarca);
router.get('/deletemarca/:id_marca',isLoggedIn, customerController.deletemarca);



router.get('/fabricantenew',isLoggedIn, customerController.fabricantenew);
router.post('/addfabricantenew',isLoggedIn, customerController.addfabricantenew);
router.get('/updatefa/:id_fabricante',isLoggedIn, customerController.editfabricante);
router.post('/updatefa/:id_fabricante',isLoggedIn, customerController.updatefabricante);
router.get('/deletefa/:id_fabricante',isLoggedIn, customerController.deletefabricante);





/*añadir mantenimiento*/
router.get('/reporte/:id_camara',isLoggedIn, customerController.reportecamara);

router.post('/reporte',isLoggedIn, customerController.savereporte);

router.get('/confir',isLoggedIn, customerController.confir);
router.post('/updatema/:id_camara',isLoggedIn, customerController.updatema);
router.get('/deletema/:id_reporte',isLoggedIn, customerController.deletema);


/* postes  */

router.get('/postes',isLoggedIn, customerController.postes);
router.get('/postenew',isLoggedIn, customerController.postenew);
router.post('/addposte',isLoggedIn, customerController.saveposte);


router.get('/colonianew',isLoggedIn, customerController.colonianew);
router.post('/addcolonianew',isLoggedIn, customerController.addcolonianew);
router.get('/updatecolonia/:id_colonias',isLoggedIn, customerController.editcolonia);
router.post('/updatecolonia/:id_colonias',isLoggedIn, customerController.updatecolonia);
router.get('/deletecolonia/:id_colonias',isLoggedIn, customerController.deletecolonia);



router.get('/ciudadnew',isLoggedIn, customerController.ciudadnew);
router.post('/addciudadnew',isLoggedIn, customerController.addciudadnew);
router.get('/updateciudad/:id_ciudades', isLoggedIn,customerController.editciudad);
router.post('/updateciudad/:id_ciudades',isLoggedIn, customerController.updateciudad);
router.get('/deleteciudad/:id_ciudades',isLoggedIn, customerController.deleteciudad);


router.get('/updatepos/:id_poste',isLoggedIn, customerController.editpost);
router.post('/updatepost/:id_poste',isLoggedIn, customerController.updatepost);
router.get('/deletepost/:id_poste',isLoggedIn, customerController.deletepost);

router.get('/vercam/:id_poste',isLoggedIn, customerController.vercam);


/* administracion usuarios  */
router.get('/personal',isLoggedIn, customerController.personal);
router.get('/personalnew',isLoggedIn, customerController.personalnew);

router.post('/addpersonalnew',isLoggedIn, customerController.addpersonalnew);

router.get('/updateusuario/:id_personal',isLoggedIn, customerController.editusuario);
router.post('/updateusuario/:id_personal',isLoggedIn, customerController.updateusuario);
router.get('/deleteusuario/:id_personal',isLoggedIn, customerController.deleteusuario);

/* MANTENIMENTO_ADMI */

router.get('/mantenimientos',isLoggedIn, customerController.mantenimientos);




/* PERFIL USUARIO */
router.get('/perfil',isLoggedIn, customerController.perfil);
router.get('/updateperfil/:id_personal',isLoggedIn, customerController.editperfil);
router.post('/updateperfil/:id_personal',isLoggedIn, customerController.updateperfil);
router.get('/tipo_usuario',isLoggedIn, customerController.tipo_usuario);
/* PREGUNTA SECRETAS */
router.get('/preguntas',isLoggedIn, customerController.preguntas);
router.post('/addpreguntas',isLoggedIn, customerController.addpreguntas);
router.get('/updatepreguntas/:idpreguntas',isLoggedIn, customerController.editpreguntas);
router.post('/updatepreguntas/:idpreguntas',isLoggedIn, customerController.updatepreguntas);
router.get('/deletepreguntas/:idpreguntas', isLoggedIn,customerController.deletepreguntas);



/* CUENTAS  */
router.get('/recuperar', customerController.recuperar);

router.get('/recuperarcuenta',customerController.recuperarcuenta);

router.get('/validar',customerController.validar);


/* TECNICO */
router.get('/perfil_te',isLoggedIn, customerController.perfil_te);

router.get('/updateperfil_te/:id_personal',isLoggedIn, customerController.editperfil_te);
router.post('/updateperfil_te/:id_personal',isLoggedIn, customerController.updateperfil_te);

router.get('/mantenimientos_te',isLoggedIn, customerController.mantenimientos_te);

router.get('/cam_man/:id_reporte',isLoggedIn, customerController.cam_man);

router.get('/update_res/:id_camara',isLoggedIn, customerController.update_res);

/* 

router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);
*/
module.exports = router;

