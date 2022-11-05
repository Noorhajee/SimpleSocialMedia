import React, { Component } from 'react';

class AddPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post:""
			// post: {
			// 	comment:[]
			// },
			// listPosts: []
		}
	}

	onPostChanged(e){
		let value = e.target.value;
  	this.setState({
			post: value
	})
	}
	AddPost(e){
      console.log(this.state.post);
			this.state.listPosts.push(e.target.value)
			this.setState({
        post: this.state.listPosts
      });
	}
	render() {
		return (
			<div>
				<div className="card card-body">
				<div className="container">
        <form action="">
          <div className="form-group">

						<div className="mb-3">
							<label  className="form-label"> <h1>SIMPLE SOCIAL MEDIA</h1></label>
							<textarea className="form-control"
							// id="exampleFormControlTextarea1"
							rows="3"
							placeholder="Write what you think"
							onChange={this.onPostChanged.bind(this)}
							></textarea>
						</div>
						</div>
						<div className="d-grid gap-2 col-2 ms-4 mx-auto">
								<button className="btn btn-secondary" type="button"
								 onClick={this.AddPost.bind(this)}
								>Add Post</button>
						</div>
						</form>
						<div>

						<h4>
						<label for="exampleFormControlTextarea1" className="form-label"> <span>Post:</span></label>
							<span>{this.state.post}</span>
							</h4>
						</div>

          </div>
          </div>
			</div>
		);
	}
}

export default AddPost;