const express = require('express');
const router = express.Router();
const {
    addMenRecord,
    getMenRecords,
    getIndividualMan,
    updateManRecord,
    deleteManRecord
} = require('../controllers/menController')

router.post("/men", addMenRecord);
router.get("/men", getMenRecords);
router.get("/men/:id", getIndividualMan);
router.patch("/men/:id", updateManRecord);
router.delete("/men/:id", deleteManRecord);

module.exports = router;
