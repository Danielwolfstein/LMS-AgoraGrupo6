const router = require('express').Router()
const authUser = require('../middleware/authUser')
const authAdmin = require('../middleware/authAdmin')
const controllerCompetence = require('../controllers/competences')

router.post('/new-competence', authAdmin, controllerCompetence.create);
router.get('/get-competences/:_id', authUser, controllerCompetence.getCompetences);
router.get('/get-competence/:_id', authAdmin, controllerCompetence.getCompetence);
router.put('/update-competence/:_id', authAdmin, controllerCompetence.updateCompetence)
router.delete('/delete-competence/:_id', authAdmin, controllerCompetence.deleteCompetence);

module.exports = router