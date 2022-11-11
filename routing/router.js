const express= require("express");
const router= express.Router();

const auth= require("../middleware/auth");

const addCtrl= require("../controller/AdresseController");
const certifCtrl= require("../controller/CertifController");
const experienceCtrl= require("../controller/ExperienceController");
const formationCtrl= require("../controller/FormationController");
const messCtrl= require("../controller/MessageController");
const projetCtrl= require("../controller/ProjetController");
const skillCtrl= require("../controller/SkillController");
const userCtrl= require("../controller/UserController");


router.get('/adresse/all', addCtrl.get);
router.post('/adresse/new', auth, addCtrl.add);
router.put('/adresse/update', auth, addCtrl.update);

router.get('/certification/all', certifCtrl.get);
router.post('/certification/new', auth, certifCtrl.add);
router.put('/certification/update', auth, certifCtrl.update);
router.delete('/certification/delete/:id', auth, certifCtrl.delete);

router.get('/experience/all', experienceCtrl.get);
router.post('/experience/new', auth, experienceCtrl.add);
router.put('/experience/update', auth, experienceCtrl.update);
router.delete('/experience/delete/:id', auth, experienceCtrl.delete);

router.get('/formation/all', formationCtrl.get);
router.post('/formation/new', auth, formationCtrl.add);
router.put('/formation/update', auth, formationCtrl.update);
router.delete('/formation/delete/:id', auth, formationCtrl.delete);

router.get('/message/all', messCtrl.get);
router.post('/message/new', auth, messCtrl.add);
router.delete('/message/delete/:id', auth, messCtrl.delete);

router.get('/projet/all', projetCtrl.get);
router.post('/projet/new', auth, projetCtrl.add);
router.put('/projet/update', auth, projetCtrl.update);
router.delete('/projet/delete/:id', auth, projetCtrl.delete);

router.get('/skill/all', skillCtrl.get);
router.post('/skill/new', auth, skillCtrl.add);
router.put('/skill/update', auth, skillCtrl.update);
router.delete('/skill/delete/:id', auth, skillCtrl.delete);

router.post('/user/new', auth, userCtrl.signin);
router.post('/user/login', userCtrl.login);
router.delete('/user/delete/:id', auth, userCtrl.delete);

module.exports = router;
