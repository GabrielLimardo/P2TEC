import React, { Component } from 'react'

class UserList extends Component {

    constructor() {
        super()
        this.state = {
            listaUsers: [],
        };
    }

    componentDidMount() {
        console.log("Montado Info");
        let url = ' http://localhost:3030/api/users';
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({
                    listaUsers: data.data.users
                })
            })

            .catch((error) => {
                console.log(error)
            })
    }

    componentDidUpdate() {
        console.log('Actualizado');
    };

    render() {
        const listaUsers = this.state.listaUsers;
        return (
            <div>
                <h1 class="h3 mb-2 text-gray-800">All the users in the Database</h1>
                <div class="card shadow mb-4">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Rol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listaUsers.map(function (user, idx) {
                                        return (
                                            <tr key={idx}>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.rol}</td>
                                            </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
};

export default UserList;