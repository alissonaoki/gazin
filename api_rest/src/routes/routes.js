const express = require('express');
require('express-async-errors');

const router = express.Router();
const developerController = require('../controllers/developerController');

router.post("/", async (req, res) => {
    res.status(201).json(await developerController.create(req));
});

router.get("/", async (req, res) => {
	let response = await developerController.find(req);
    if (response) res.status(200).json(response)
    else res.status(404)
});

router.get("/:id", async (req, res) => {
    let response = await developerController.findById(req);
    if (response) res.status(200).json(response)
    else res.status(404)
});

router.put("/:id", async (req, res) => {
    res.status(204).json(await developerController.update(req));
});

router.delete("/:id", async (req, res) => {
    res.status(200).json(await developerController._delete(req));
});

module.exports = router;