import React, { Component } from 'react'

class CategoryList extends Component {

    constructor() {
        super()
        this.state = {
            listaCategories: [],
        };
    }

    componentDidMount() {
        console.log("Montado Info");
        let url = ' http://localhost:3030/api/categories';
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({
                    listaCategories: data.data.categories
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
        const listaCategories = this.state.listaCategories;
        return (
            <div>
                <h1 class="h3 mb-2 text-gray-800">All the categories in the Database</h1>
                <div class="card shadow mb-4">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Category Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listaCategories.map(function (category, idx) {
                                        return (
                                            <tr key={idx}>
                                                <td>{category.id}</td>
                                                <td>{category.name}</td>
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

export default CategoryList;