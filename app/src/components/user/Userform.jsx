import React from 'react'

export default props =>
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text"
                        name="nome"
                        id="nome"
                        className="form-control"
                        autoComplete='off'
                        value={props.nome}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder='Digite o nome...' />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Idade</label>
                    <input type="number"
                        name="idade"
                        id="idade"
                        className="form-control"
                        autoComplete='off'
                        value={props.idade}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Digite a idade..." />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Sexo</label>
                    <input type="text"
                        name="sexo"
                        id="sexo"
                        className="form-control"
                        autoComplete='off'
                        value={props.sexo}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Digite o sexo..." />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Hobby</label>
                    <input type="text"
                        name="hobby"
                        id="hobby"
                        className="form-control"
                        autoComplete='off'
                        value={props.hobby}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder="Digite o hobby..." />
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Data De Nascimento</label>
                    <input type="date"
                        name="datanascimento"
                        id="datanascimento"
                        className="form-control"
                        value={props.datanascimento}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}/>
                </div>
            </div>
        </div>

        <hr />

        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-success" onClick={props.save}>
                    <i className="fa fa-save mr-1"></i> Salvar
                </button>
                <button className="btn btn-danger ml-2" onClick={props.clear}>
                    <i className="fa fa-remove mr-1"></i> Cancelar
                </button>
            </div>
        </div>

    </div>