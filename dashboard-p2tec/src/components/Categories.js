import React, { Component } from 'react';


class Categories extends Component {

	constructor() {
		super();
		this.state = {
			categories: [],
		};
	}

	componentDidMount() {
		console.log("Montado Info");
		let url = 'http://localhost:3030/api/info';
		fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(data => {
				console.log(data.data)
				this.setState({
					categories: data.data.categories
				})
				console.log(data.data.categories);
			})

			.catch((error) => {
				console.log(error)
			})
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("Up: " + JSON.stringify(this.state.categories))
	}

	render() {
		const categories = this.state.categories;
		return (
			<div class="col-lg-6 mb-4">
				<div class="card shadow mb-4">
					<div class="card-header py-3">
						<h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
					</div>
					<div class="card-body">
						<div class="row">
							{categories.map(function (category, idx) {
								return(
								<div class="col-lg-6 mb-4" key={idx}>
									<div class="card bg-info text-white shadow">
										<div class="card-body">
											{category}
										</div>
									</div>
								</div>)
							}
							)}
						</div>
					</div>
				</div>
			</div>
		)

	}
};

export default Categories;