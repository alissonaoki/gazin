const developerService = require('../services/developerService')

async function create(req){
    const newDev = await developerService.create(req.body);
    return {id: newDev._id};
}

async function find(req){
    return await developerService.find(req.query);
}

async function findById(req){
    const developer = await developerService.findById(req.params.id);
    return developer || {};
}

async function update(req){
    const updatedDev = await developerService.update(req.params.id, req.body);
    return updatedDev;
}

async function _delete(req){
    await developerService._delete(req.params.id);
    return {};
}

module.exports = {create, find, findById, update, _delete};