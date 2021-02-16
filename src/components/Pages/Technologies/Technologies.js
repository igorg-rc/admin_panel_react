import React from 'react'
import { technologies } from './TechnologiesData'

export default function Technologies() {
	const frontendList = technologies.frontend.map(technology => {
		return	<tr>
							<td>{technology.title}</td>
							<td><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></td>
							<td>
								<a className="btn-small green">Edit</a> 
								<a className="btn-small red">Delete</a> 
							</td>
						</tr>
	});

	const backendList = technologies.backend.map(technology => {
		return	<tr>
							<td>{technology.title}</td>
							<td><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></td>
							<td>
								<a className="btn-small green">Edit</a> 
								<a className="btn-small red">Delete</a> 
							</td>
						</tr>
	});

	const toolsList = technologies.tools.map(technology => {
		return	<tr>
							<td>{technology.title}</td>
							<td><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></td>
							<td>
								<a className="btn-small green">Edit</a> 
								<a className="btn-small red">Delete</a> 
							</td>
						</tr>
	});

	const apiList = technologies.api.map(technology => {
		return	<tr>
							<td>{technology.title}</td>
							<td><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></td>
							<td>
								<a className="btn-small green">Edit</a> 
								<a className="btn-small red">Delete</a> 
							</td>
						</tr>
	});

	return (
		<div className="">
			<h1 className="page-title">Technologies</h1>
			<div className="row">
				<div className="col s12 blue-grey lighten-4">
					<div className="content">
						<div id="frontend" className="tech-category">
							<div className="row blue-grey darken-1">
								<div className="valign-wrapper">
									<div className="col s6">
										<span className="category-title white-text left">Frontend</span>
									</div>
									<div className="col s6">
										<div className="right">
											<a className="btn-small green">Edit</a>
											<a className="btn-small red">Delete</a>
										</div>
									</div>
								</div>
							</div>

							<table className="centered">
								<thead>
									<tr>
										<th>Title</th>
										<th>Image</th>
										<th>Actions</th>
									</tr>
								</thead>
				
								<tbody>
									{frontendList}
								</tbody>
							</table>

							<div className="center-align">
								<button className="btn blue add-button" href="">Add technology</button>
							</div>
						</div>



						<div id="backend" className="tech-category">
							<div className="row blue-grey darken-1">
								<div className="valign-wrapper">
									<div className="col s6">
										<span className="category-title white-text left">Backend</span>
									</div>
									<div className="col s6">
										<div className="right">
											<a className="btn-small green">Edit</a>
											<a className="btn-small red">Delete</a>
										</div>
									</div>
								</div>
							</div>

							<table className="centered">
								<thead>
									<tr>
										<th>Title</th>
										<th>Image</th>
										<th>Actions</th>
									</tr>
								</thead>
				
								<tbody>
									{backendList}
								</tbody>
							</table>

							<div className="center-align">
								<button className="btn blue add-button" href="">Add technology</button>
							</div>
						</div>


						<div id="sdsd" className="tech-category">
							<div className="row blue-grey darken-1">
								<div className="valign-wrapper">
									<div className="col s6">
										<span className="category-title white-text left">Tools</span>
									</div>
									<div className="col s6">
										<div className="right">
											<a className="btn-small green">Edit</a>
											<a className="btn-small red">Delete</a>
										</div>
									</div>
								</div>
							</div>

							<table className="centered">
								<thead>
									<tr>
										<th>Title</th>
										<th>Image</th>
										<th>Actions</th>
									</tr>
								</thead>
				
								<tbody>
									{toolsList}
								</tbody>
							</table>

							<div className="center-align">
								<button className="btn blue add-button" href="">Add technology</button>
							</div>
						</div>

						<div id="api" className="tech-category">
							<div className="row blue-grey darken-1">
								<div className="valign-wrapper">
									<div className="col s6">
										<span className="category-title white-text left">API</span>
									</div>
									<div className="col s6">
										<div className="right">
											<a className="btn-small green">Edit</a>
											<a className="btn-small red">Delete</a>
										</div>
									</div>
								</div>
							</div>

							<table className="centered">
								<thead>
									<tr>
										<th>Title</th>
										<th>Image</th>
										<th>Actions</th>
									</tr>
								</thead>
				
								<tbody>
									{apiList}
								</tbody>
							</table>

							<div className="center-align">
								<button className="btn blue add-button" href="">Add technology</button>
							</div>
						</div>


						<div className="row blue-grey darken-1" style={{ padding: '3vh', margin: '0 -0.55vw' }}>
							<a className="btn blue">Add category</a>
						</div>

					</div>
				</div>

			
			</div>
		</div>
	)
}
