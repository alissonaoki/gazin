const {Developers} = require('../db/db')

async function create(body){
    const developer = new Developers(body);
    return await developer.save();
}

async function find(query){

    let developers;
    const {limit, page} = query;
 
    //filtrosDisponiveis: ["nome", "idade", "sexo"],
    //filtrosAplicados: ["nome Alisson Seiji Aoki", "idade = 25"]   
    //let { idade, nome, sexo } = req.query
    //let query = { idade, nome, sexo }

    delete query.limit;
    delete query.page;

    if (limit && page){
        developers = await Developers.find(query).limit(parseInt(limit)).skip(parseInt(limit) * parseInt(page))
    } else {
        developers = await Developers.find(query)
    }
    return developers;
}

async function findById(id){
    return await Developers.findById(id);
}

async function update(id, body){
   
    const developer = await Developers.findById(id);

    if (!developer) throw 'Desenvolvedor nao encontrado!';

    Object.assign(developer, body);

    return await developer.save();
}

async function _delete(id){
    await Developers.findByIdAndRemove(id); 
}

module.exports = {create, find, findById, update, _delete};