import React, { Component } from 'react'


class ProductList extends Component {

	constructor() {
		super()
		this.state = {
			listaProductos: [],
		};
	}

	componentDidMount() {
		console.log("Montado Info");
		let url = ' http://localhost:3030/api/products';
		fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(data => {
				console.log(data);
				this.setState({
					listaProductos: data.data.products
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
		const listaProductos = this.state.listaProductos;
		return (
			<div>
				<h1 class="h3 mb-2 text-gray-800">All the products in the Database</h1>
				<div class="card shadow mb-4">
					<div class="card-body">
						<div class="table-responsive">
							<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
										<th>Categories</th>
										<th>Id</th>
										<th>Brand</th>
										<th>Imagen</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
										<th>Categories</th>
										<th>Id</th>
										<th>Brand</th>
										<th>Imagen</th>
									</tr>
								</tfoot>
								<tbody>
									{listaProductos.map(function (producto, idx) {
										return (
											<tr key={idx}>
												<td>{producto.name}</td>
												<td>{producto.descripcion}</td>
												<td>{producto.price}</td>
												<td>{producto.category}</td>
												<td>{producto.id}</td>
												<td>{producto.brand}</td>
												<td><img class="img-fluid px-3 px-sm-4 mt-3 mb-4" height="550" width="550" src={"http://localhost:3030/img/" + producto.image} alt="foto" /></td>
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

export default ProductList;