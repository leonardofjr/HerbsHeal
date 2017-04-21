var express = require('express');
var router = express.Router();
var ctrlSativaStrains = require('../controllers/sativa');



var cors = require('cors')
var app = express();


// Read All
router.get('/sativa', cors(),ctrlSativaStrains.sativaReadAll)

// Read By ID
router.get('/sativa/:sativaid', ctrlSativaStrains.sativaReadOne);

// Create new entry
router.post('/sativa', ctrlSativaStrains.sativaCreate);

// Updating entry by ID
router.put('/sativa/:sativaid', ctrlSativaStrains.sativaUpdate)

// Delete entry by ID
router.delete('/sativa/:sativaid', ctrlSativaStrains.sativaDelete)

router.post('/sativa/:sativaid', ctrlSativaStrains.addMedicinalProperties);

module.exports = router;