const express = require('express');
const router = express.Router();
const statesController = require('../../controllers/statesController');


    
router.route('/')
    .get(statesController.getAllStates);


router.route('/:state')
    .get(statesController.getState);

router.route('/:state/funfact')
    .get(statesController.getFunFact);


module.exports = router;