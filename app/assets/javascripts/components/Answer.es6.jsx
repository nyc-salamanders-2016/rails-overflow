class Answer extends React.Component {
  render() {
    return(
      <div className="answer">
        <p className="lead">{this.props.data.body}</p><p><em>by {this.props.data.user.username}</em></p>
        <span class="pull-xs-right"><small>Score: </small><span class="tag tag-default tag-pill">{this.props.data.score}</span></span>
        <CommentsContainer />
      </div>
    )
  }
}
