import React from 'react'
import { technologies } from './TechnologiesData'

import './Technologies.css'

export default function Technologies() {
	const frontendList = technologies.frontend.map(technology => {
		return	<tr>
							<td className="td-img"><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></td>
							<td className="td-title"><span>{technology.title}</span></td>
							<td className="td-actions right">
								<div>
									<a className="indigo-text right"><i className="material-icons actions">delete</i></a>
									<a className="indigo-text right"><i className="material-icons actions">create</i></a>
								</div>
							</td>
						</tr>
	});

	const backendList = technologies.backend.map(technology => {
		return	<tr>
							<td className="td-img"><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></td>
							<td className="td-title"><span>{technology.title}</span></td>
							<td className="td-actions right">
								<div>
									<a className="indigo-text right"><i className="material-icons actions">delete</i></a>
									<a className="indigo-text right"><i className="material-icons actions">create</i></a>
								</div>
							</td>
						</tr>
	});

	const toolsList = technologies.tools.map(technology => {
		return	<tr>
							<td className="td-img"><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></td>
							<td className="td-title"><span>{technology.title}</span></td>
							<td className="td-actions right">
								<div>
									<a className="indigo-text right"><i className="material-icons actions">delete</i></a>
									<a className="indigo-text right"><i className="material-icons actions">create</i></a>
								</div>
							</td>
						</tr>
	});

	const apiList = technologies.api.map(technology => {
		return	<tr>
							<td className="td-img"><img className="tech-icon" src={technology.imgUrl} alt={technology.title}></img></td>
							<td className="td-title"><span>{technology.title}</span></td>
							<td className="td-actions right">
								<div>
									<a className="indigo-text right"><i className="material-icons actions">delete</i></a>
									<a className="indigo-text right"><i className="material-icons actions">create</i></a>
								</div>
							</td>
						</tr>
	});

	return (
		<div style={{ paddingTop: '75px'}}>
			<div className="row">
				<div className="col s12 grey lighten-4">
					<div className="content">
						<div id="frontend" className="tech-category">
							<div className="row indigo darken-1">
								<div className="valign-wrapper">
									<div className="col s6">
										<span className="category-title white-text left">Frontend</span>
									</div>
									<div className="col s6">
										<div className="right" style={{ marginRight: '-0.4vw' }}>
											<a className="white-text"><span className="title-icons"><i className="material-icons">create</i></span></a>
											<a className="white-text"><span className="title-icons"><i className="material-icons">delete</i></span></a>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="right" style={{ width: '95%'}}>
									<table className="">
										<thead>
											<tr>
												<th className="th-img">Image</th>
												<th className="th-title">Title</th>
												<th className="th-actions right">Actions</th>
											</tr>
										</thead>
						
										<tbody>
											{frontendList}
										</tbody>
									</table>

									<div className="center-align add-technology-btn row">
										<div className="col">
											<button className="btn indigo darken-2 waves-effect waves-light btn-add-tech" href="">
												<i className="material-icons left">add_circle_outline</i>Add technology
											</button>
										</div>
									</div>

								</div>
							</div>
						</div>



						<div id="backend" className="tech-category">
							<div className="row indigo darken-1">
								<div className="valign-wrapper">
									<div className="col s6">
										<span className="category-title white-text left">Backend</span>
									</div>
									<div className="col s6">
										<div className="right" style={{ marginRight: '-0.4vw' }}>
											<a className="white-text"><span className="title-icons"><i className="material-icons">create</i></span></a>
											<a className="white-text"><span className="title-icons"><i className="material-icons">delete</i></span></a>
										</div>
									</div>
								</div>
							</div>


							<div className="row">
								<div className="right" style={{ width: '95%'}}>
									<table className="">
										<thead>
											<tr>
												<th className="th-img">Image</th>
												<th className="th-title">Title</th>
												<th className="th-actions right">Actions</th>
											</tr>
										</thead>
						
										<tbody>
											{backendList}
										</tbody>
									</table>

									<div className="center-align add-technology-btn row">
										<div className="col">
											<button className="btn indigo darken-2 waves-effect waves-light btn-add-tech" href="">
												<i className="material-icons left">add_circle_outline</i>Add technology
											</button>
										</div>
									</div>

								</div>
							</div>
						</div>


						<div id="tools" className="tech-category">
							<div className="row indigo darken-1">
								<div className="valign-wrapper">
									<div className="col s6">
										<span className="category-title white-text left">Tools</span>
									</div>
									<div className="col s6">
										<div className="right" style={{ marginRight: '-0.4vw' }}>
											<a className="white-text"><span className="title-icons"><i className="material-icons">create</i></span></a>
											<a className="white-text"><span className="title-icons"><i className="material-icons">delete</i></span></a>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="right" style={{ width: '95%'}}>
									<table className="">
										<thead>
											<tr>
												<th className="th-img">Image</th>
												<th className="th-title">Title</th>
												<th className="th-actions right">Actions</th>
											</tr>
										</thead>
						
										<tbody>
											{toolsList}
										</tbody>
									</table>

									<div className="center-align add-technology-btn row">
										<div className="col">
											<button className="btn indigo darken-2 waves-effect waves-light btn-add-tech" href="">
												<i className="material-icons left">add_circle_outline</i>Add technology
											</button>
										</div>
									</div>

								</div>
							</div>
						</div>


						<div id="api" className="tech-category">
							<div className="row indigo darken-1">
								<div className="valign-wrapper">
									<div className="col s6">
										<span className="category-title white-text left">API</span>
									</div>
									<div className="col s6">
										<div className="right" style={{ marginRight: '-0.4vw' }}>
											<a className="white-text"><span className="title-icons"><i className="material-icons">create</i></span></a>
											<a className="white-text"><span className="title-icons"><i className="material-icons">delete</i></span></a>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="right" style={{ width: '95%'}}>
									<table className="">
										<thead>
											<tr>
												<th className="th-img">Image</th>
												<th className="th-title">Title</th>
												<th className="th-actions right">Actions</th>
											</tr>
										</thead>
						
										<tbody>
											{apiList}
										</tbody>
									</table>

									<div className="center-align add-technology-btn row">
										<div className="col">
											<button className="btn indigo darken-2 waves-effect waves-light btn-add-tech" href="">
												<i className="material-icons left">add_circle_outline</i>Add technology
											</button>
										</div>
									</div>

								</div>
							</div>
						</div>

					</div>
				</div>

					<div style={{ textAlign: 'left' }}>
						<button className="btn waves-effect waves-light" href="">
							<i className="material-icons left">add_circle_outline</i>Add category
						</button>
					</div>
			</div>
		</div>
	)
}
