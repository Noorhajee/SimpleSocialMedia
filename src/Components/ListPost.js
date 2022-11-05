import React, { Component } from 'react';

class ListPost extends Component {
	// const myPost = this.props.
	constructor(props) {
		super(props);
		this.state = {
    //  comment:"",
			time: new Date().toLocaleTimeString()
			}
	}

	// AddComment(){
	// }

	componentDidMount() {
		setInterval(() => {
				this.setState({
						time: new Date().toLocaleTimeString()
				})
		}, 1000)
}
	render() {
		return (
			<div>
			<div className="card card-body">
				<div className="container">
				<form action=""/>
            <label><h1>MY LIST POST</h1></label>
						<div className="mb-3">
						<div class="shadow p-5 mb-5 bg-body rounded"
						//  style={{
						// 	color:  ? 'white' : '',
						// }}
						>Regular Comment</div>

						</div>
						 <div class="d-flex flex-row mb-3 ms-4">
						<button className="btn btn-secondary  " type="button">Like</button>
						<button className="btn btn-secondary ms-4"
								//  onClick={this.AddComment.bind(this)}
								type="button"> Add Comment</button>
						 </div>
			</div>
			</div>

			<div className="card card-body">
				<div className="container">
				<form action=""/>
            <label><h1>MY Comment</h1></label>
						<div className="mb-3">
						<textarea className="form-control border border-light"
							rows="3"
							placeholder="Write your comment"
							// onChange={this.onPostChanged.bind(this)}
							></textarea>
						</div>
						<div>{this.state.time}</div>

			</div>
			</div>
			</div>
		);
	}
}

export default ListPost;