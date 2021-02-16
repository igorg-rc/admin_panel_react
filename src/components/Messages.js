import React from 'react'

export default function Messages() {
	return (
		<div>
			<h1>Messages</h1>
			<div className="blue-grey lighten-2" style={{ height: '50vh' }}>
			<div className="row">
				<div className="col s12 m4">
					<h4>All messages</h4>
					<ul>
						<li><a href="#message1" className="white-text">message 1</a></li>
						<ul><a href="#message1" className="black-text">message 2</a></ul>
					</ul>
				</div>
				<div className="blue-grey col s12 m8">
					<div className="">
						<h5 className="left-align">From: Vasya</h5>
						<h5 className="left-align">Email: vasya.pupkin@gmail.com</h5>
						<h5 className="left-align">Content:</h5>
						<textarea rows={10} className="white">text text more text...text text more text...text text more text...text text more text...</textarea>
					</div>
				</div>
			</div>
		</div>
		</div>
	)
}
