import React from 'react'

export default props => {

    const lista = props.list

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Sexo</th>
                    <th>Hobby</th>
                    <th>Data De Nascimento</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {lista.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.nome}</td>
                            <td>{user.idade}</td>
                            <td>{user.sexo}</td>
                            <td>{user.hobby}</td>
                            <td>{user.datanascimento}</td>
                            <td>
                                <button className="btn btn-warning" title='Editar' onClick={() => props.load(user)}>
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button className="btn btn-danger ml-2" id='btn-excluir' title='Excluir' onClick={() => props.remove(user)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}