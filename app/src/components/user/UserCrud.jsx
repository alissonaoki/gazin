import React from 'react'
import Main from '../template/Main'
import Userform from './Userform'
import UserTable from './UserTable'
import Http from './UserHttp'

import { NotificationContainer, NotificationManager } from 'react-notifications'

const headerProps = {
    icon: 'users',
    title: 'Desenvolvedores',
    subtitle: 'Cadastro de Desenvolvedores: Incluir, Alterar e Excluir e Listar'
}

const initialState = {
    user: {
        nome: '',
        idade: '',
        sexo: '',
        hobby: '',
        datanascimento: ''
    },
    list: []
}

export default class UserCrud extends React.Component {

    constructor() {
        super()

        this.state = { ...initialState }

        this.clear = this.clear.bind(this)
        this.save = this.save.bind(this)
        this.getUpdatedList = this.getUpdatedList.bind(this)
        this.updateField = this.updateField.bind(this)
        this.load = this.load.bind(this)
        this.remove = this.remove.bind(this)
        this.handleEnterPress = this.handleEnterPress.bind(this)
    }

    componentWillMount() {
        Http.get().then(response => {
            this.setState({ list: response.data })
        })
    }

    handleEnterPress(event) {
        if (event.key === 'Enter') {
            this.save()
        }
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `/${user.id}` : ''

        if (user.nome === '' || user.idade === '' || user.sexo === '' || user.hobby === '' || user.datanascimento === '' ){
            NotificationManager.warning('Todos os campos são obrigatórios', 'Preencha os campos')
        } else {
            Http[method](url, user)
                .then(response => {
                    if (method === 'post')
                        user.id = response.data.id
                    const list = this.getUpdatedList( user )
                    this.setState({ user: initialState.user, list })
                    if (method === 'post')
                        NotificationManager.success('Desenvolvedor criado com sucesso', 'Criar Desenvolvedor')                 
                    else
                        NotificationManager.success('Desenvolvedor alterado com sucesso', 'Editar Desenvolvedor')
                })
        }

    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add)
            list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        Http.delete(`/${user.id}`)
            .then(response => {
                const list = this.getUpdatedList(user, false)
                this.setState({ list })
                NotificationManager.success('Desenvolvedor excluído com sucesso', 'Excluir Desenvolvedor')
            })
    }

    render() {
        return (
            <Main {...headerProps}>
                <Userform nome={this.state.user.nome}
                    idade={this.state.user.idade}
                    sexo={this.state.user.sexo}
                    hobby={this.state.user.hobby}
                    datanascimento={this.state.user.datanascimento}
                    clear={this.clear}
                    save={this.save}
                    updateField={this.updateField}
                    handleEnterPress={this.handleEnterPress}
                />
                <UserTable list={this.state.list}
                    load={this.load}
                    remove={this.remove}
                />
            </Main>
        )
    }
}