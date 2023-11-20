const MensRanking = require('../models/menModel');

const addMenRecord = async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    } catch (e) {
        res.status(400).send(e);
    }
};

const getMenRecords = async (req, res) => {
    try {
        const getMen = await MensRanking.find({}).sort({ "ranking": 1 });
        res.send(getMen);
    } catch (e) {
        res.status(400).send(e);
    }
};

const getIndividualMan = async (req, res) => {
    try {
        const _id = req.params.id;
        const getMan = await MensRanking.findById(_id);
        res.send(getMan);
    } catch (e) {
        res.status(400).send(e);
    }
};

const updateManRecord = async (req, res) => {
    try {
        const _id = req.params.id;
        const getMan = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(getMan);
    } catch (e) {
        res.status(500).send(e);
    }
};

const deleteManRecord = async (req, res) => {
    try {
        const _id = req.params.id;
        const getMan = await MensRanking.findByIdAndDelete(_id);
        res.send(getMan);
    } catch (e) {
        res.status(500).send(e);
    }
};

module.exports = {
    addMenRecord,
    getMenRecords,
    getIndividualMan,
    updateManRecord,
    deleteManRecord
};
