import React from 'react'

export default function Messages() {
	return (
		<div>
			<h1>Messages</h1>
			<div className="blue-grey lighten-2" style={{ height: '50vh' }}>
			<div className="row">
				<div className="col s12 m3">
					<h4>All messages</h4>
					<ul>
						<li><a href="#message1" className="white-text">message 1</a></li>
						<ul><a href="#message1" className="black-text">message 2</a></ul>
					</ul>
				</div>
				<div className="blue-grey col s12 m9">
					<div className="">
						<h5 className="left-align">From: Vasya</h5>
						<h5 className="left-align">Email: vasya.pupkin@gmail.com</h5>
						<h5 className="left-align">Message:</h5>
						<div className="blue-grey lighten-4" style={{ height: '32vh', padding: '20px', margin: '20px' }}>
							Text text more text...Text text more text...Text text more text...Text text more text...Text text more text...
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	)
}
