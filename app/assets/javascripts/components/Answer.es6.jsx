class Answer extends React.Component {
  render() {
    return(
      <div className="answer">
        <p className="lead">{this.props.data.body}</p><p><em>by {this.props.data.user.username}</em></p>
        <span className="pull-xs-right"><small>Score: </small><span className="tag tag-default tag-pill">{this.props.data.score}</span></span>
        <CommentsContainer comments={this.props.data.comments} id={this.props.data.id} type="answer"/>
      </div>
    )
  }
}
